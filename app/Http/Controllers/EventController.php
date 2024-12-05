<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class EventController extends Controller
{

    public function index()
    {
        return Inertia::render("backend/Event/Index", [
            "title" => "Event",
            "events" => Event::where("vendor_id", Auth::user()->vendor->id)->get()->map(function ($event) use (&$events) {
                return mappingEvent($event);
            }),
        ]);
    }

    public function create()
    {
        return Inertia::render("backend/Event/Create", [
            "title" => "Tambah Event",
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "tax" => "required|numeric|min:1",
            "description" => "required",
            "start_date" => "required|date",
            "start_time" => "required|date_format:H:i",
            "end_date" => "required|date",
            "end_time" => "required|date_format:H:i",
            "building_name" => "required",
            "address" => "required",
            "maps_link" => "nullable",
            "banner" => "required|image",
        ], [
            "name.required" => "Nama event harus diisi.",
            "tax.required" => "Pajak harus diisi.",
            "tax.numeric" => "Pajak harus berupa angka.",
            "tax.min" => "Pajak harus lebih besar dari 0.",
            "description.required" => "Deskripsi harus diisi.",
            "start_date.required" => "Tanggal mulai harus diisi.",
            "start_date.date" => "Tanggal mulai harus berupa tanggal yang valid.",
            "start_time.required" => "Waktu mulai harus diisi.",
            "start_time.date_format" => "Waktu mulai harus dalam format jam:menit (HH:mm).",
            "end_date.required" => "Tanggal berakhir harus diisi.",
            "end_date.date" => "Tanggal berakhir harus berupa tanggal yang valid.",
            "end_time.required" => "Waktu berakhir harus diisi.",
            "end_time.date_format" => "Waktu berakhir harus dalam format jam:menit (HH:mm).",
            "building_name.required" => "Nama tempat harus diisi.",
            "address.required" => "Alamat harus diisi.",
            "banner.required" => "Banner harus diisi.",
            "banner.image" => "Banner harus berformat .jpg, .jpeg, atau .png.",
        ]);

        $validator->after(function ($validator) use ($request) {
            $startDateTime = strtotime("{$request->start_date} {$request->start_time}");
            $endDateTime = strtotime("{$request->end_date} {$request->end_time}");

            if ($endDateTime <= $startDateTime) {
                $validator->errors()->add('end_date', 'Tanggal dan waktu berakhir harus lebih besar dari tanggal dan waktu mulai.');
            }
        });

        if ($validator->fails()) {
            return back()->withErrors($validator);
        }

        $newEvent = $validator->validated();

        DB::beginTransaction();
        try {
            if ($request->hasFile("banner")) {
                $file = $request->file("banner");
                $fileName = "banners/banner-" . Str::slug($request->name) . "." . $file->extension();
                $file->storeAs("public/", $fileName);
                $newEvent["banner"] = $fileName;
            }

            $newEvent["vendor_id"] = Auth::user()->vendor->id;
            $newEvent["slug"] = str()->slug($newEvent["name"]);
            $event = Event::create($newEvent);
            DB::commit();
            return redirect()->route("admin.event.detail", $event->id)->with("notification", [
                "title" => "Event Sukses Ditambah",
                "text" => "Silahkan isi data ticket dan talent untuk event ini.",
                "icon" => "success",
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->withErrors([
                "message" => $e->getMessage(),
            ]);
            // return redirect()->back()->with("notification", [
            //     "title" => "Error",
            //     "text" => $e->getMessage(),
            //     "icon" => "error",
            // ]);
        }
    }

    public function show($id)
    {
        return view("backend.event.edit", [
            "title" => "Edit Event",
            "event" => Event::find($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        $updatedEvent = $request->validate([
            "name" => "required",
            "tax" => "required|numeric",
            "description" => "required",
            "start_date" => "required|date",
            "start_time" => "required|date_format:H:i",
            "end_date" => "required|date",
            "end_time" => "required|date_format:H:i",
            "building_name" => "required",
            "address" => "required",
            "maps_link" => "nullable",
        ], [
            "name.required" => "Nama event harus diisi.",
            "tax.required" => "Pajak harus diisi.",
            "tax.numeric" => "Pajak harus berupa angka.",
            "description.required" => "Deskripsi harus diisi.",
            "start_date.required" => "Tanggal mulai harus diisi.",
            "start_date.date" => "Tanggal mulai harus berupa tanggal yang valid.",
            "start_time.required" => "Waktu mulai harus diisi.",
            "start_time.date_format" => "Waktu mulai harus dalam format jam:menit (HH:mm).",
            "end_date.required" => "Tanggal berakhir harus diisi.",
            "end_date.date" => "Tanggal berakhir harus berupa tanggal yang valid.",
            "end_time.required" => "Waktu berakhir harus diisi.",
            "end_time.date_format" => "Waktu berakhir harus dalam format jam:menit (HH:mm).",
            "building_name.required" => "Nama tempat harus diisi.",
            "address.required" => "Alamat harus diisi.",
        ]);

        $startDateTime = strtotime("{$request->start_date} {$request->start_time}");
        $endDateTime = strtotime("{$request->end_date} {$request->end_time}");

        if ($endDateTime <= $startDateTime) {
            return back()->withErrors([
                'end_date' => 'Tanggal dan waktu berakhir harus lebih besar dari tanggal dan waktu mulai.',
                'end_time' => 'Waktu berakhir harus lebih besar dari waktu mulai.',
            ])->withInput();
        }

        DB::beginTransaction();
        try {
            if ($request->hasFile("banner")) {
                $file = $request->file("banner");
                $fileName = "banners/banner-" . Str::slug($request->name) . "." . $file->extension();
                Storage::delete("public/" . Event::firstWhere("id", $id)->banner);
                $file->storeAs("public/", $fileName);
                $updatedEvent["banner"] = $fileName;
            }

            $updatedEvent["vendor_id"] = Auth::user()->vendor->id;
            $updatedEvent["banner"] = Event::firstWhere("id", $id)->banner;
            $updatedEvent["slug"] = str()->slug($updatedEvent["name"]);

            Event::firstWhere("id", $id)->update($updatedEvent);
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with("notification", [
                "title" => "Error",
                "text" => $e->getMessage(),
                "icon" => "error",
            ]);
        }
        DB::commit();
        return redirect()->route("admin.event.index")->with("notification", [
            "title" => "Berhasil",
            "text" => "Mengubah Event",
            "icon" => "success",
        ]);
    }

    public function eventDetail($id)
    {
        $event = mappingEvent(Event::find($id));
        return Inertia::render("backend/Event/Detail", [
            "title" => $event["name"],
            "event" => $event,
            "tickets" => $event["tickets"],
            "talents" => $event["talents"],
        ]);
    }

    public function destroy($id)
    {
        Event::find($id)->delete();
        session()->flash("notification", [
            "title" => "Sukses",
            "text" => "Event berhasil dihapus",
            "icon" => "success",
        ]);
    }
}
