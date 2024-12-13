<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\MethodPayment;
use App\Models\Setting;
use App\Models\Ticket;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Vendor;
use App\Models\Visitor;
use App\Models\Voucher;
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
        $event_slug = Event::firstWhere("slug", $slug)->slug;
        $isSession = session("data_ticket_event_{$event_slug}") ?? [];
        return Inertia::render("frontend/Event/EventDetail", [
            "title" => "Event",
            "event" => mappingEvent(Event::firstWhere("slug", $slug)),
            "is_session" => $isSession
        ]);
    }

    public function eventTickets($slug)
    {
        $event_slug = Event::firstWhere("slug", $slug)->slug;
        if (session("data_ticket_event_{$event_slug}")) {
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
            "internet_fee" => Setting::first()->internet_fee,
            "total" => $total + Setting::first()->internet_fee,
            "expiration_time" => now()->addMinutes(Setting::first()->limit_entry_data),
        ];

        $event_slug = Event::firstWhere("slug", $slug)->slug;
        session()->put([
            "data_ticket_event_{$event_slug}" => [
                "for_page_data_diri" => $data,
            ],
        ]);

        return redirect()->route("event.data-diri", $slug);
    }

    public function eventDataDiri($slug)
    {
        $event_slug = Event::firstWhere("slug", $slug)->slug;
        $data = session("data_ticket_event_{$event_slug}.for_page_data_diri");
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
            // 'data_pembeli.year' => 'required',
            // 'data_pembeli.month' => 'required',
            // 'data_pembeli.date' => 'required',
            'data_pembeli.gender' => 'required',
            'data_pembeli.identity_type' => 'required',
            'data_pembeli.identity_number' => 'required',

            'data_pengunjung.*.name' => 'required|string',
            'data_pengunjung.*.email' => 'required|email',
            // 'data_pengunjung.*.year' => 'required',
            // 'data_pengunjung.*.month' => 'required',
            // 'data_pengunjung.*.date' => 'required',
            'data_pengunjung.*.gender' => 'required',
            'data_pengunjung.*.identity_type' => 'required',
            'data_pengunjung.*.identity_number' => 'required',
        ], [
            'data_pembeli.name.required' => 'Nama wajib diisi',
            'data_pembeli.email.required' => 'Email wajib diisi',
            // 'data_pembeli.year.required' => 'Tahun wajib diisi',
            // 'data_pembeli.month.required' => 'Bulan wajib diisi',
            // 'data_pembeli.date.required' => 'Tanggal wajib diisi',
            'data_pembeli.gender.required' => 'Jenis kelamin wajib diisi',
            'data_pembeli.identity_type.required' => 'Tipe identitas wajib diisi',
            'data_pembeli.identity_number.required' => 'Nomor identitas wajib diisi',

            'data_pengunjung.*.name.required' => 'Nama wajib diisi',
            'data_pengunjung.*.email.required' => 'Email wajib diisi',
            // 'data_pengunjung.*.year.required' => 'Tahun wajib diisi',
            // 'data_pengunjung.*.month.required' => 'Bulan wajib diisi',
            // 'data_pengunjung.*.date.required' => 'Tanggal wajib diisi',
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
                // "tanggal_lahir" => $pengunjung["year"] . "-" . $pengunjung["month"] . "-" . $pengunjung["date"],
                // "date" => $pengunjung["date"],
                // "month" => $pengunjung["month"],
                // "year" => $pengunjung["year"],
                "gender" => $pengunjung["gender"],
                "identity_type" => $pengunjung["identity_type"],
                "identity_number" => $pengunjung["identity_number"],
            ]);
        }

        $event_slug = Event::firstWhere("slug", $slug)->slug;
        $data_ticket = [
            "pembeli" => [
                "name" => $request->data_pembeli["name"],
                "email" => $request->data_pembeli["email"],
                // "tanggal_lahir" => $request->data_pembeli["year"] . "-" . $request->data_pembeli["month"] . "-" . $request->data_pembeli["date"],
                // "date" => $request->data_pembeli["date"],
                // "month" => $request->data_pembeli["month"],
                // "year" => $request->data_pembeli["year"],
                "gender" => $request->data_pembeli["gender"],
                "identity_type" => $request->data_pembeli["identity_type"],
                "identity_number" => $request->data_pembeli["identity_number"],
            ],
            "pengunjung" => $data_pengunjung,
            "sub_total" => $request["sub_total"],
            "tax" => $request["tax"],
            "tax_amount" => $request["tax_amount"],
            "internet_fee" => Setting::first()->internet_fee,
            "total" => $request["total"],
            "expiration_time" => session("data_ticket_event_{$event_slug}.for_page_data_diri.expiration_time"),
        ];

        if (session("data_ticket_event_{$event_slug}.for_page_payment.voucher")) {
            $data_ticket["voucher"] = session("data_ticket_event_{$event_slug}.for_page_payment.voucher");
            $data_ticket["total_after_discount"] = session("data_ticket_event_{$event_slug}.for_page_payment.total_after_discount");
            $data_ticket["discount_label"] = session("data_ticket_event_{$event_slug}.for_page_payment.discount_label");
        }

        $data_ticket_for_page_data_diri = session("data_ticket_event_{$event_slug}.for_page_data_diri");
        session()->put("data_ticket_event_{$event_slug}", [
            "for_page_data_diri" => $data_ticket_for_page_data_diri,
            "for_page_payment" => $data_ticket,
        ]);
        return redirect()->route("event.pembayaran", $slug);
    }

    public function eventPembayaran($slug)
    {
        $event_slug = Event::firstWhere("slug", $slug)->slug;
        if (!session("data_ticket_event_{$event_slug}.for_page_payment")) {
            return back();
        }

        $data_ticket = session("data_ticket_event_{$event_slug}.for_page_payment");
        foreach ($data_ticket["pengunjung"] as $pengunjung) {
            if (empty($pengunjung["name"]) || empty($pengunjung["email"]) || empty($pengunjung["gender"]) || empty($pengunjung["identity_type"]) || empty($pengunjung["identity_number"])) {
                return redirect()->back()->withErrors(["data_pengunjung" => "Data salah satu pengunjung masih ada yang kosong"]);
            }
        }
        $data_ticket_data_diri_back_from_payment = session("data_ticket_event_{$event_slug}.for_page_data_diri");
        $data_ticket_data_diri_back_from_payment["pembeli"] = $data_ticket["pembeli"];
        $data_ticket_data_diri_back_from_payment["pengunjung"] = $data_ticket["pengunjung"];
        session()->put("data_ticket_event_{$event_slug}", [
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
        $event_slug = Transaction::firstWhere("invoice", $invoice)->event->slug;
        session()->forget("data_ticket_event_{$event_slug}");
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
        $transactions = Transaction::where("user_id", Auth::user()->id)
            ->where("status", "Pembayaran Berhasil")
            ->get();

        $ticketCommings = [];
        $ticketPasts = [];

        foreach ($transactions as $transaction) {
            if ($transaction->event->start_date < now()) {
                array_push($ticketCommings, mappingTransaction($transaction));
            } else {
                array_push($ticketPasts, mappingTransaction($transaction));
            }
        }

        return Inertia::render("frontend/Ticket/Ticket", [
            "title" => "Tiket",
            "tickets" => [
                "ticketCommings" => $ticketCommings,
                "ticketPasts" => $ticketPasts,
            ],
        ]);
    }

    public function ticketDetail($invoice)
    {
        $invoiceConcatenate = "INV-{$invoice}";
        $transaction = Transaction::firstWhere("invoice", $invoiceConcatenate);
        return Inertia::render("frontend/Ticket/TicketDetail", [
            "title" => "Tiket Detail",
            "transaction" => mappingTransaction($transaction),
        ]);
    }

    public function directDashboard()
    {
        return redirect()->route("admin.dashboard");
    }

    public function dashboard()
    {
        // $transaction_count_vendor = [];
        // $event = Event::where("vendor_id", Auth::user()->vendor->id)->get();
        // foreach ($event as $e) {
        //     array_push($transaction_count_vendor, Transaction::where("event_id", $e->id)->first());
        // }
        $transaction_count_vendor = Event::where("vendor_id", Auth::user()->vendor->id)
            ->get()
            ->map(function ($event) {
                return Transaction::where("event_id", $event->id)->first();
            })
            ->filter()
            ->count();

        $revenue = 0;
        $vendorEvents = Vendor::firstWhere("user_id", Auth::user()->id)->events;
        foreach ($vendorEvents as $event) {
            foreach (Transaction::where("event_id", $event->id)->where("status", "Pembayaran Berhasil")->get() as $transaction) {
                $revenue += $transaction->total;
            }
        }

        return Inertia::render("backend/Dashboard", [
            "title" => "Dashboard",
            "dashboard" => [
                "dashboard_admin" => [
                    "visitor_count" => Visitor::count(),
                    "user_count" => User::count(),
                    "vendor_count" => Vendor::count(),
                    "transaction_count" => Transaction::count(),
                ],
                "dashboard_vendor" => [
                    "event_count" => Event::where("vendor_id", Auth::user()->vendor->id)->count(),
                    "promo_count" => Voucher::where("user_id", Auth::user()->id)->count(),
                    "transaction_count" => $transaction_count_vendor,
                    "revenue" => formatMoney($revenue),
                ],
            ],
        ]);
    }

    public function changePassword()
    {
        return Inertia::render("backend/Profile/ChangePassword", [
            "title" => "Ganti Password",
        ]);
    }

    public function users()
    {
        $users = [];
        foreach (User::all() as $user) {
            array_push($users, [
                "id" => $user->id,
                "name" => $user->name,
                "email" => $user->email,
                "role" => $user->role,
                "created_at" => formatDate($user->created_at),
            ]);
        }
        return Inertia::render("backend/User/Index", [
            "title" => "Data Pengguna",
            "users" => $users,
        ]);
    }
}
