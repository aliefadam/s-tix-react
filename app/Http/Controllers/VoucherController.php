<?php

namespace App\Http\Controllers;

use App\Models\Voucher;
use App\Models\VoucherUsage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class VoucherController extends Controller
{
    public function index()
    {
        $vouchers = [];
        $usageVouchers = [];

        foreach (Voucher::where("user_id", Auth::user()->id)->get() as $voucher) {
            array_push($vouchers, mappingVoucher($voucher));
        }
        foreach (
            VoucherUsage::whereHas("voucher", function ($voucher) {
                $voucher->where("user_id", Auth::user()->id);
            })->get() as $voucher
        ) {
            array_push($usageVouchers, [
                "id" => $voucher->id,
                "voucher_id" => $voucher->voucher_id,
                "transaction_id" => $voucher->transaction_id,
                "used_at" => formatDate($voucher->used_at) . " - " . formatTime($voucher->used_at),
                "user_email" => $voucher->user_email,
                "user_name" => $voucher->user_name,
                "event_name" => $voucher->transaction->event->name,
            ]);
        }

        return Inertia::render("backend/Voucher/Index", [
            "title" => "Voucher",
            "vouchers" => $vouchers,
            "usage_voucher" => $usageVouchers,
        ]);
    }

    public function create()
    {
        return Inertia::render("backend/Voucher/Create", [
            "title" => "Tambah Voucher",
        ]);
    }

    public function store(Request $request)
    {
        $newVoucher = $request->validate([
            "code" => "required|unique:vouchers|min:5",
            "unit" => "required",
            "nominal" => "required",
            "minimal_transaction" => "required|numeric",
            "maximal_used" => "required|numeric",
        ], [
            "code.required" => "Kode voucher harus diisi",
            "code.unique" => "Kode voucher sudah ada",
            "code.min" => "Kode voucher minimal 5 karakter",
            "unit.required" => "Unit voucher harus dipilih",
            "nominal.required" => "Nominal voucher harus diisi",
            "minimal_transaction.required" => "Minimal transaksi harus diisi",
            "minimal_transaction.numeric" => "Minimal transaksi harus berupa angka",
            "maximal_used.required" => "Maksimal penggunaan voucher harus diisi",
            "maximal_used.numeric" => "Maksimal penggunaan voucher harus berupa angka",
        ]);

        DB::beginTransaction();
        try {
            $newVoucher["user_id"] = Auth::user()->id;
            Voucher::create($newVoucher);
            DB::commit();
            return redirect()->route("admin.voucher.index")->with("notification", [
                "title" => "Sukses",
                "text" => "Voucher berhasil ditambahkan",
                "icon" => "success",
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with("notification", [
                "title" => "Error",
                "text" => $e->getMessage(),
                "icon" => "error",
            ]);
        }
    }

    public function show($id)
    {
        // TODO: Implement show() method to display a specific voucher.
    }

    public function edit($id)
    {
        return Inertia::render("backend/Voucher/Edit", [
            "title" => "Voucher",
            "voucher" => mappingVoucher(Voucher::find($id)),
        ]);
    }

    public function update(Request $request, $id)
    {
        $editedVoucher = $request->validate([
            "code" => "required|min:5|unique:vouchers,code,{$id}",
            "unit" => "required",
            "nominal" => "required",
            "minimal_transaction" => "required|numeric",
            "maximal_used" => "required|numeric",
        ], [
            "code.required" => "Kode voucher harus diisi",
            "code.unique" => "Kode voucher sudah ada",
            "code.min" => "Kode voucher minimal 5 karakter",
            "unit.required" => "Unit voucher harus dipilih",
            "nominal.required" => "Nominal voucher harus diisi",
            "minimal_transaction.required" => "Minimal transaksi harus diisi",
            "minimal_transaction.numeric" => "Minimal transaksi harus berupa angka",
            "maximal_used.required" => "Maksimal penggunaan voucher harus diisi",
            "maximal_used.numeric" => "Maksimal penggunaan voucher harus berupa angka",
        ]);

        DB::beginTransaction();
        try {
            $voucher = Voucher::find($id);
            $voucher->update($editedVoucher);
            DB::commit();
            return redirect()->route("admin.voucher.index")->with("notification", [
                "title" => "Sukses",
                "text" => "Voucher berhasil diedit",
                "icon" => "success",
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with("notification", [
                "title" => "Error",
                "text" => $e->getMessage(),
                "icon" => "error",
            ]);
        }
    }

    public function activate($id)
    {
        $voucher = Voucher::find($id);
        $voucher->update([
            "active" => true,
        ]);
        return back()->with("notification", [
            "title" => "Sukses",
            "text" => "Voucher diaktifkan",
            "icon" => "success",
        ]);
    }

    public function deactivate($id)
    {
        $voucher = Voucher::find($id);
        $voucher->update([
            "active" => false,
        ]);
        return back()->with("notification", [
            "title" => "Sukses",
            "text" => "Voucher dinonaktifkan",
            "icon" => "success",
        ]);
    }

    public function cekPromo(Request $request)
    {
        $voucher = Voucher::where("code", $request->promo)->first();
        $total = session("data_ticket.for_page_payment.total");
        if ($voucher) {
            $minimalTransaction = $voucher->minimal_transaction;
            $minimalTransactionFormatted = formatMoney($minimalTransaction);
            $active = $voucher->active;
            $unit = $voucher->unit;
            $nominal = $voucher->nominal;

            if (!$active) {
                return back()->withErrors(["promo" => "Voucher ini sedang tidak aktif"]);
            }

            if ($total < $minimalTransaction) {
                return back()->withErrors(["promo" => "Minimal Transaksi untuk kode ini adalah {$minimalTransactionFormatted}"]);
            }

            if (isUseVoucher($voucher)) {
                return back()->withErrors(["promo" => "Voucher ini sudah anda gunakan"]);
            }

            $data_ticket = session("data_ticket");
            $data_ticket_updated = [
                "for_page_data_diri" => $data_ticket["for_page_data_diri"],
                "for_page_payment" => $data_ticket["for_page_payment"],
            ];
            $data_ticket_updated["for_page_payment"]["voucher"] = $voucher;
            if ($unit == "percent") {
                $discount = $total * $nominal / 100;
                $data_ticket_updated["for_page_payment"]["total_after_discount"] = $total - $discount;
                $discountFormatted = formatMoney($discount);
                $discount_label = "{$nominal}% (-{$discountFormatted})";
            } else {
                $data_ticket_updated["for_page_payment"]["total_after_discount"] = $total - $nominal;
                $discountFormatted = formatMoney($nominal);
                $discount_label = "-{$discountFormatted}";
            }

            $data_ticket_updated["for_page_payment"]["discount_label"] = $discount_label;
            session()->put("data_ticket", $data_ticket_updated);

            return back()->with("notification", [
                "title" => "Sukses",
                "text" => "Promo Digunakan",
                "icon" => "success",
            ]);
        } else {
            return back()->withErrors(["promo" => "Kode promo tidak ditemukan"]);
        }
    }

    public function deletePromo()
    {
        $data_ticket = session("data_ticket");
        $data_ticket_updated = [
            "for_page_data_diri" => $data_ticket["for_page_data_diri"],
            "for_page_payment" => $data_ticket["for_page_payment"],
        ];
        $data_ticket_updated["for_page_payment"]["voucher"] = null;
        $data_ticket_updated["for_page_payment"]["total_after_discount"] = 0;
        $data_ticket_updated["for_page_payment"]["discount_label"] = "";
        session()->put("data_ticket", $data_ticket_updated);
        return back()->with("notification", [
            "title" => "Sukses",
            "text" => "Promo Dihapus",
            "icon" => "success",
        ]);
    }

    public function destroy($id)
    {
        Voucher::find($id)->delete();
        return back()->with("notification", [
            "title" => "Sukses",
            "text" => "Voucher berhasil dihapus",
            "icon" => "success",
        ]);
    }
}
