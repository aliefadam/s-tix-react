<?php

namespace App\Http\Controllers;

use App\Models\MethodPayment;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TransactionController extends Controller
{
    public function index()
    {
        return view("backend.transaction.index");
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
            $data_ticket = $request->data_ticket;
            $internetFee = 0;
            $transaction = Transaction::create([
                "id" => "1",
                "invoice" => "INV-" . Str::upper(Str::random(10)) . "-" . date("Ymd"),
                "user_id" => Auth::user()->id,
                "event_id" => $request->event_id,
                "sub_total" => $data_ticket["sub_total"],
                "tax_percent" => $data_ticket["tax"],
                "tax_amount" => $data_ticket["tax_amount"],
                "internet_fee" => $internetFee,
                "promo_code" => $request->promo_code ?? null,
                "promo_percent" => $request->promo_percent ?? null,
                "promo_amount" => $request->promo_amount ?? null,
                "total" => $data_ticket["sub_total"] + $data_ticket["tax_amount"] + $internetFee,
                "payment" => json_encode([
                    "method" => $request->payment_method,
                    "data" => "123123123",
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
                "date_of_birth" => $pembeli["tanggal_lahir"],
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
                    "date_of_birth" => $pengunjung["tanggal_lahir"],
                    "gender" => $pengunjung["gender"],
                    "identity_type" => $pengunjung["identity_type"],
                    "identity_number" => $pengunjung["identity_number"],
                    "e_ticket" => "E-TICKET-" . Str::upper(Str::random(10)) . Auth::user()->id . "-" . date("Ymd"),
                ]);
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
                "created_at" => formatDate($transaction->created_at),
                "created_at_time" => formatTime($transaction->created_at),
            ],
        ]);
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
}
