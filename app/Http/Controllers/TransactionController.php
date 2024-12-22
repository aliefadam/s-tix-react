<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\MethodPayment;
use App\Models\Setting;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use App\Models\Voucher;
use App\Models\VoucherUsage;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::whereHas("event", function ($query) {
            $query->whereHas("vendor", function ($query) {
                $query->whereHas("user", function ($query) {
                    $query->where("id", Auth::user()->id);
                });
            });
        })->orderBy("created_at", "desc")->get();

        if (Auth::user()->role == "super-admin") {
            $transactions = Transaction::all();
        }

        $data = [];
        foreach ($transactions as $transaction) {
            array_push($data, mappingTransaction($transaction));
        }

        return Inertia::render("backend/Transaction/Index", [
            "title" => "Transaksi",
            "transactions" => $data,
        ]);
    }

    public function create()
    {
        return view("backend.transaction.create");
    }

    public function store(Request $request, $slug)
    {
        try {
            if (!$request->payment_method) {
                throw new Exception("Silahkan pilih metode pembayaran");
            }
            DB::beginTransaction();
            $event_slug = Event::firstWhere("slug", $slug)->slug;
            $data_ticket = session("data_ticket_event_{$event_slug}.for_page_payment");
            $isUseVoucher = isset($data_ticket["voucher"]);
            $internetFee = Setting::first()->internet_fee;
            if ($isUseVoucher) {
                $total = $data_ticket["total_after_discount"];
                $promo_code = $data_ticket["voucher"]["code"];
                if ($data_ticket["voucher"]["unit"] == "percent") {
                    $nominal = $data_ticket["voucher"]["nominal"];
                    $promo_amount = $data_ticket["total"] * $nominal / 100;
                } else {
                    $promo_amount = $data_ticket["voucher"]["nominal"];
                }
            } else {
                $total = $data_ticket["total"];
                $promo_code = null;
                $promo_amount = null;
            }
            $transaction = Transaction::create([
                "id" => "1",
                "invoice" => generateInvoice(),
                "user_id" => Auth::user()->id,
                "event_id" => $request->event_id,
                "sub_total" => $data_ticket["sub_total"],
                "tax_percent" => $data_ticket["tax"],
                "tax_amount" => $data_ticket["tax_amount"],
                "internet_fee" => $internetFee,
                "promo_code" => $promo_code,
                "promo_amount" => $promo_amount,
                "total" => $total,
                "payment" => json_encode([
                    "method" => $request->payment_method,
                    "data" => "909090909090909",
                    "expiration_date" => now()->addDays(1),
                ]),
                "status" => "Menunggu Pembayaran",
            ]);

            $pembeli = $data_ticket["pembeli"];
            TransactionDetail::create([
                "transaction_id" => $transaction["id"],
                "ticket_id" => null,
                "type" => "pembeli",
                "name" => $pembeli["name"],
                "email" => $pembeli["email"],
                // "date_of_birth" => $pembeli["tanggal_lahir"],
                "gender" => $pembeli["gender"],
                "identity_type" => $pembeli["identity_type"],
                "identity_number" => $pembeli["identity_number"],
                "e_ticket" => null,
            ]);

            foreach ($data_ticket["pengunjung"] as $pengunjung) {
                TransactionDetail::create([
                    "transaction_id" => $transaction["id"],
                    "ticket_id" => $pengunjung["ticket_id"],
                    "type" => "pengunjung",
                    "name" => $pengunjung["name"],
                    "email" => $pengunjung["email"],
                    // "date_of_birth" => $pengunjung["tanggal_lahir"],
                    "gender" => $pengunjung["gender"],
                    "identity_type" => $pengunjung["identity_type"],
                    "identity_number" => $pengunjung["identity_number"],
                    "e_ticket" => "E-TICKET-" . Str::upper(Str::random(10)) . Auth::user()->id . "-" . date("Ymd"),
                ]);
            }

            if ($isUseVoucher) {
                $voucherID = $data_ticket["voucher"]["id"];
                $voucher = Voucher::find($voucherID);
                $voucher->update([
                    "used" => $voucher->used + 1,
                ]);
                VoucherUsage::create([
                    "voucher_id" => $voucherID,
                    "transaction_id" => $transaction->id,
                    "user_name" => $pembeli["name"],
                    "user_email" => $pembeli["email"],
                    "used_at" => now(),
                ]);
                if ($voucher->maximal_used != 0 && $voucher->used == $voucher->maximal_used) {
                    $voucher->update([
                        "active" => false,
                    ]);
                }
            }
            DB::commit();
            return redirect()->route("event.payment-waiting", [$transaction->invoice]);
        } catch (Exception $e) {
            DB::rollBack();
            return redirect()->back()->with("notification", [
                "title" => "Error",
                "text" => $e->getMessage(),
                "icon" => "error",
            ]);
        }
    }

    public function show($id)
    {
        $transaction = Transaction::firstWhere("id", $id);
        return response()->json([
            "transaction" => mappingTransaction($transaction),
        ]);
    }

    public function findByInvoice($invoice)
    {
        $transaction = Transaction::where("invoice", $invoice)->where("status", "Pembayaran Berhasil")->where("is_activate", false)->first();
        if ($transaction) {
            return response()->json([
                "transaction" => [
                    "invoice" => $transaction->invoice,
                    "status" => $transaction->status,
                    "event" => mappingEvent($transaction->event),
                    "buyer" => getDataPembeli($transaction->id),
                    "visitor" => getDataPengunjung($transaction->id),
                    "tickets" => getGroupingTicket($transaction->id),
                    "payment" => [
                        "method" => json_decode($transaction->payment)->method,
                        "data" => json_decode($transaction->payment)->data,
                        "expiration_date" => formatDate(json_decode($transaction->payment)->expiration_date),
                        "expiration_date_raw" => json_decode($transaction->payment)->expiration_date,
                        "image" => MethodPayment::firstWhere("name", json_decode($transaction->payment)->method)->image
                    ],
                    "internet_fee" => formatMoney($transaction->internet_fee),
                    "tax_percent" => $transaction->tax_percent,
                    "tax_amount" => formatMoney($transaction->tax_amount),
                    "total_ticket_price" => formatMoney(getTotalTicket($transaction->id)),
                    "total" => formatMoney($transaction->total),
                    "promo_code" => $transaction->promo_code,
                    "promo_amount" => formatMoney($transaction->promo_amount),
                    "created_at" => formatDate($transaction->created_at),
                    "created_at_time" => formatTime($transaction->created_at),
                ],
            ]);
        } else {
            return response()->json([
                "transaction" => null,
            ]);
        }
    }

    public function edit($id)
    {
        // TODO: Implement edit() method.
    }

    public function update(Request $request, $id)
    {
        // TODO: Implement update() method.
    }

    public function destroy($id)
    {
        // TODO: Implement destroy() method.
    }

    public function simulatePaymentPage()
    {
        return Inertia::render("Simulate/Payment", [
            "title" => "Simulasi Pembayaran",
        ]);
    }

    public function simulatePaymentPost(Request $request)
    {
        $request->validate([
            "invoice" => "required",
        ], [
            "invoice.required" => "Invoice harus diisi",
        ]);

        DB::beginTransaction();
        try {
            payment($request->invoice);
            DB::commit();
            return back()->with("notification", [
                "title" => "Sukses",
                "text" => "Simulasi pembayaran berhasil",
                "icon" => "success",
            ]);
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors([
                "invoice" => $e->getMessage()
            ]);
        }
    }

    public function cancel(Request $request)
    {
        $transaction = Transaction::find($request->id);
        $transaction->update([
            "status" => "Pemesanan Dibatalkan",
            "cancel_reason" => $request->cancel_reason,
        ]);

        return back()->with("notification", [
            "title" => "Sukses",
            "text" => "Pemesanan berhasil dibatalkan",
            "icon" => "success",
        ]);
    }
}
