<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\MethodPayment;
use App\Models\Ticket;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render("frontend/Welcome", [
            "title" => "Beranda",
            "events" => Event::all()->map(function ($event) {
                return [
                    "id" => $event->id,
                    "name" => $event->name,
                    "slug" => $event->slug,
                    "date" => $event->start_date->translatedFormat('l, d F Y'),
                    "building_name" => $event->building_name,
                    "address" => $event->address,
                    "price" => formatMoney($event->ticket()->min('price')),
                    "banner" => upload_asset($event->banner),
                ];
            }),
            "static_banner" => [
                asset("imgs/gambar-4.jpg"),
                asset("imgs/gambar-5.jpg"),
            ],
            "carousel" => [
                asset("imgs/gambar-2.jpg"),
                asset("imgs/gambar-3.jpg"),
            ]
        ]);
    }

    public function event($slug)
    {
        return Inertia::render("frontend/Event/EventDetail", [
            "title" => "Event",
            "event" => mappingEvent(Event::firstWhere("slug", $slug)),
        ]);
    }

    public function eventTickets($slug)
    {
        if (session("data_ticket")) {
            return back()->with("notification", [
                "title" => "Perhatian",
                "text" => "Melakukan pembelian tiket ulang akan menghapus data tiket sebelumnya",
                "icon" => "warning",
                "showConfirmation" => true
            ]);
        }
        return Inertia::render("frontend/Event/EventTicket", [
            "title" => "Pilih Tiket",
            "event" => mappingEvent(Event::firstWhere("slug", $slug)),
        ]);
    }

    public function saveTickets(Request $request, $slug)
    {
        if (!Auth::check()) {
            session()->put("redirect", [
                "route" => route("event.tickets", $slug),
            ]);
            return redirect()->route("login");
        }

        if (session("redirect")) {
            session()->forget("redirect");
        }

        if (empty($request->count)) {
            return back()->with("notification", [
                "title" => "Gagal",
                "text" => "Tambahkan minimal 1 tiket",
                "icon" => "error",
            ]);
        }

        $data_ticket = [];
        foreach ($request->count as $count) {
            if ($count != null) {
                for ($i = 1; $i <= $count["count"]; $i++) {
                    array_push($data_ticket, [
                        "id" => $count["id"],
                        "name" => Ticket::firstWhere("id",  $count["id"])->name,
                        "price" => Ticket::firstWhere("id",  $count["id"])->price,
                    ]);
                }
            }
        }

        $sub_total = array_sum(Arr::pluck($data_ticket, "price"));
        $tax = Event::firstWhere("slug", $slug)->tax;
        $taxAmount = $sub_total * $tax / 100;
        $total = $sub_total + $taxAmount;

        $data = [
            "tickets" => $data_ticket,
            "sub_total" => $sub_total,
            "tax" => $tax,
            "tax_amount" => $taxAmount,
            "total" => $total,
            "expiration_time" => now()->addMinutes(30),
        ];

        session()->put([
            "data_ticket" => [
                "for_page_data_diri" => $data,
            ],
        ]);

        return redirect()->route("event.data-diri", $slug);
    }

    public function eventDataDiri($slug)
    {
        $data = session("data_ticket.for_page_data_diri");
        return Inertia::render("frontend/Event/EventDataDiri", [
            "title" => "Data Diri",
            "profile" => Auth::user(),
            "event" => mappingEvent(Event::firstWhere("slug", $slug)),
            "data_ticket" => $data,
        ]);
    }

    public function saveDataDiri(Request $request, $slug)
    {
        $request->validate([
            'data_pembeli.name' => 'required|string',
            'data_pembeli.email' => 'required|email',
            'data_pembeli.year' => 'required',
            'data_pembeli.month' => 'required',
            'data_pembeli.date' => 'required',
            'data_pembeli.gender' => 'required',
            'data_pembeli.identity_type' => 'required',
            'data_pembeli.identity_number' => 'required',

            'data_pengunjung.*.name' => 'required|string',
            'data_pengunjung.*.email' => 'required|email',
            'data_pengunjung.*.year' => 'required',
            'data_pengunjung.*.month' => 'required',
            'data_pengunjung.*.date' => 'required',
            'data_pengunjung.*.gender' => 'required',
            'data_pengunjung.*.identity_type' => 'required',
            'data_pengunjung.*.identity_number' => 'required',
        ], [
            'data_pembeli.name.required' => 'Nama wajib diisi',
            'data_pembeli.email.required' => 'Email wajib diisi',
            'data_pembeli.year.required' => 'Tahun wajib diisi',
            'data_pembeli.month.required' => 'Bulan wajib diisi',
            'data_pembeli.date.required' => 'Tanggal wajib diisi',
            'data_pembeli.gender.required' => 'Jenis kelamin wajib diisi',
            'data_pembeli.identity_type.required' => 'Tipe identitas wajib diisi',
            'data_pembeli.identity_number.required' => 'Nomor identitas wajib diisi',

            'data_pengunjung.*.name.required' => 'Nama wajib diisi',
            'data_pengunjung.*.email.required' => 'Email wajib diisi',
            'data_pengunjung.*.year.required' => 'Tahun wajib diisi',
            'data_pengunjung.*.month.required' => 'Bulan wajib diisi',
            'data_pengunjung.*.date.required' => 'Tanggal wajib diisi',
            'data_pengunjung.*.gender.required' => 'Jenis kelamin wajib diisi',
            'data_pengunjung.*.identity_type.required' => 'Tipe identitas wajib diisi',
            'data_pengunjung.*.identity_number.required' => 'Nomor identitas wajib diisi',
        ]);

        $data_pengunjung = [];
        foreach ($request->data_pengunjung as $key => $pengunjung) {
            array_push($data_pengunjung, [
                "ticket_id" => $pengunjung["ticket_id"],
                "name" => $pengunjung["name"],
                "email" => $pengunjung["email"],
                "tanggal_lahir" => $pengunjung["year"] . "-" . $pengunjung["month"] . "-" . $pengunjung["date"],
                "date" => $pengunjung["date"],
                "month" => $pengunjung["month"],
                "year" => $pengunjung["year"],
                "gender" => $pengunjung["gender"],
                "identity_type" => $pengunjung["identity_type"],
                "identity_number" => $pengunjung["identity_number"],
            ]);
        }

        $data_ticket = [
            "pembeli" => [
                "name" => $request->data_pembeli["name"],
                "email" => $request->data_pembeli["email"],
                "tanggal_lahir" => $request->data_pembeli["year"] . "-" . $request->data_pembeli["month"] . "-" . $request->data_pembeli["date"],
                "date" => $request->data_pembeli["date"],
                "month" => $request->data_pembeli["month"],
                "year" => $request->data_pembeli["year"],
                "gender" => $request->data_pembeli["gender"],
                "identity_type" => $request->data_pembeli["identity_type"],
                "identity_number" => $request->data_pembeli["identity_number"],
            ],
            "pengunjung" => $data_pengunjung,
            "sub_total" => $request["sub_total"],
            "tax" => $request["tax"],
            "tax_amount" => $request["tax_amount"],
            "total" => $request["total"],
            "expiration_time" => session("data_ticket.for_page_data_diri.expiration_time"),
        ];

        if (session("data_ticket.for_page_payment.voucher")) {
            $data_ticket["voucher"] = session("data_ticket.for_page_payment.voucher");
            $data_ticket["total_after_discount"] = session("data_ticket.for_page_payment.total_after_discount");
            $data_ticket["discount_label"] = session("data_ticket.for_page_payment.discount_label");
        }

        $data_ticket_for_page_data_diri = session("data_ticket.for_page_data_diri");
        session()->put("data_ticket", [
            "for_page_data_diri" => $data_ticket_for_page_data_diri,
            "for_page_payment" => $data_ticket,
        ]);
        return redirect()->route("event.pembayaran", $slug);
    }

    public function eventPembayaran($slug)
    {
        if (!session("data_ticket.for_page_payment")) {
            return back();
        }

        $data_ticket = session("data_ticket.for_page_payment");
        foreach ($data_ticket["pengunjung"] as $pengunjung) {
            if (empty($pengunjung["name"]) || empty($pengunjung["email"]) || empty($pengunjung["tanggal_lahir"]) || empty($pengunjung["gender"]) || empty($pengunjung["identity_type"]) || empty($pengunjung["identity_number"])) {
                return redirect()->back()->withErrors(["data_pengunjung" => "Data salah satu pengunjung masih ada yang kosong"]);
            }
        }
        $data_ticket_data_diri_back_from_payment = session("data_ticket.for_page_data_diri");
        $data_ticket_data_diri_back_from_payment["pembeli"] = $data_ticket["pembeli"];
        $data_ticket_data_diri_back_from_payment["pengunjung"] = $data_ticket["pengunjung"];
        session()->put("data_ticket", [
            "for_page_data_diri" => $data_ticket_data_diri_back_from_payment,
            "for_page_payment" => $data_ticket,
        ]);

        return Inertia::render("frontend/Event/EventPayment", [
            "title" => "Pilih Metode Pembayaran",
            "event" => mappingEvent(Event::firstWhere("slug", $slug)),
            "data_ticket" => $data_ticket,
            "method_payment" => [
                "virtual_account" => MethodPayment::where("type", "virtual_account")->get(),
                "e_wallet" => MethodPayment::where("type", "e_wallet")->orWhere("type", "qris")->get(),
            ],
        ]);
    }

    public function eventPaymentWaiting($invoice)
    {
        session()->forget("data_ticket");
        $transaction = Transaction::firstWhere("invoice", $invoice);
        return Inertia::render("frontend/Event/EventPaymentWaiting", [
            "title" => "Menunggu Pembayaran",
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
                    "expiration_time" => formatTime(json_decode($transaction->payment)->expiration_date, 7),
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
    }

    public function profile()
    {
        return Inertia::render("frontend/Profile/Profile", [
            "title" => "Profil",
            "profile" => Auth::user(),
        ]);
    }

    public function transaction()
    {
        $transactions = [];
        foreach (Transaction::where("user_id", Auth::user()->id)->orderBy('created_at', 'desc')->get() as $transaction) {
            array_push($transactions, [
                "id" => $transaction->id,
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
                    "expiration_time" => formatTime(json_decode($transaction->payment)->expiration_date, 7),
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
                "created_at_date" => formatDate($transaction->created_at),
                "created_at_time" => $transaction->created_at->format("H:i"),
            ]);
        }

        return Inertia::render("frontend/Transaction/TransactionHistory", [
            "title" => "Transaksi",
            "transactions" => $transactions
        ]);
    }

    public function ticket()
    {
        return view("frontend.ticket.ticket", [
            "title" => "Tiket",
        ]);
    }

    public function ticketDetail($id)
    {
        return view("frontend.ticket.ticket-detail", [
            "title" => "Tiket Detail",
        ]);
    }

    public function directDashboard()
    {
        return redirect()->route("admin.dashboard");
    }

    public function dashboard()
    {
        return Inertia::render("backend/Dashboard", [
            "title" => "Dashboard",
        ]);
    }

    public function changePassword()
    {
        return view("backend.profile.change-password", [
            "title" => "Ubah Password",
        ]);
    }
}
