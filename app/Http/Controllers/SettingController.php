<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        return Inertia::render("backend/Website/Index", [
            "title" => "Pengaturan Website",
            "settings" => Setting::first(),
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            "internet_fee" => "required|numeric",
        ], [
            "internet_fee.required" => "Internet Fee harus diisi",
            "internet_fee.numeric" => "Internet Fee harus berupa angka",
        ]);

        DB::beginTransaction();
        try {
            $setting = Setting::first();
            $setting->update($request->all());
            DB::commit();
            return back()->with("notification", [
                "title" => "Berhasil",
                "text" => "Pengaturan berhasil diperbarui",
                "icon" => "success",
            ]);
        } catch (Exception $e) {
            DB::rollBack();
            return back()->with("notification", [
                "title" => "Error",
                "text" => $e->getMessage(),
                "icon" => "error",
            ]);
        }
    }
}
