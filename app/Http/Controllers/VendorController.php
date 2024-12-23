<?php

namespace App\Http\Controllers;

use App\Mail\SendVendorCredentials;
use App\Models\User;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Inertia\Inertia;

class VendorController extends Controller
{
    public function index()
    {
        return Inertia::render("backend/Vendor/Index", [
            "title" => "Vendor",
            "vendors" => Vendor::all()->map(function ($vendor) {
                return [
                    "id" => $vendor->id,
                    "created_at" => $vendor->created_at->translatedFormat("l, d F Y"),
                    "user" => $vendor->user,
                ];
            }),
        ]);
    }

    public function create()
    {
        return Inertia::render("backend/Vendor/Create", [
            "title" => "Tambah Vendor",
        ]);
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            "name" => "required",
            "email" => "required|email|unique:users",
        ], [
            "name.required" => "Nama harus diisi",
            "email.required" => "Email harus diisi",
            "email.email" => "Email tidak valid",
            "email.unique" => "Email sudah terdaftar",
        ]);

        DB::beginTransaction();
        try {
            $password = Str::random(10);
            $hash_password = bcrypt($password);
            $newVendor = User::create([
                "name" => $request->name,
                "email" => $request->email,
                "password" => $hash_password,
                "role" => "vendor",
            ]);
            Vendor::create([
                "user_id" => $newVendor->id,
                "category" => "Full Service",
            ]);
            Mail::to($request->email)->queue(new SendVendorCredentials([
                "email" => $request->email,
                "password" => $password,
            ]));
            DB::commit();
            return redirect()->route("admin.vendor.index")->with("notification", [
                "credentials" => [
                    "email" => $request->email,
                    "password" => $password,
                ],
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            // return back()->withErrors(["message" => $e->getMessage()]);
            return back()->with("notification", [
                "title" => "Error",
                "text" => $e->getMessage(),
                "icon" => "error",
            ]);
        }
    }

    public function edit($id)
    {
        $vendor = Vendor::firstWhere("user_id", $id);
        return Inertia::render("backend/Vendor/Edit", [
            "title" => "Edit Vendor",
            "vendor" => [
                "id" => $vendor->id,
                "created_at" => $vendor->created_at->translatedFormat("l, d F Y"),
                "user" => $vendor->user,
            ],
        ]);
    }

    public function update(Request $request, $id)
    {
        $validate = $request->validate([
            "name" => "required",
        ], [
            "name.required" => "Nama harus diisi",
        ]);

        DB::beginTransaction();
        try {
            $vendor = Vendor::find($id);
            $vendor->user->update([
                "name" => $request->name,
            ]);
            DB::commit();
            return redirect()->route("admin.vendor.index")->with("notification", [
                "title" => "Berhasil",
                "text" => "Vendor diupdate",
                "icon" => "success",
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with("notification", [
                "title" => "Error",
                "text" => $e->getMessage(),
                "icon" => "error",
            ]);
        }
    }

    public function destroy($id)
    {
        $vendor = Vendor::firstWhere("user_id", $id);
        $vendor->user->delete();
        $vendor->delete();
        return redirect()->back()->with("notification", [
            "title" => "Berhasil",
            "text" => "Vendor dihapus",
            "icon" => "success",
        ]);
    }
}
