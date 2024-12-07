<?php

namespace App\Http\Controllers;

use App\Models\Voucher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class VoucherController extends Controller
{
    public function index()
    {
        $vouchers = [];
        foreach (Voucher::all() as $voucher) {
            array_push($vouchers, mappingVoucher($voucher));
        }
        return Inertia::render("backend/Voucher/Index", [
            "title" => "Voucher",
            "vouchers" => $vouchers,
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
