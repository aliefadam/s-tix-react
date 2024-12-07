<?php

namespace App\Http\Controllers;

use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class TalentController extends Controller
{
    public function index() {}

    public function create() {}

    public function store(Request $request, $event_id)
    {

        $validate = $request->validate([
            "name" => "required",
            "image" => "required|image",
        ], [
            "name.required" => "Nama Talent harus diisi",
            "image.required" => "Gambar Talent harus diisi",
            "image.image" => "Gambar Talent harus berformat .jpg, .jpeg, atau .png",
        ]);

        $image = $request->file("image");
        $imageName = "talents/talent-" . str()->slug($validate["name"]) . $event_id . "." . $image->extension();
        $image->storeAs("public/", $imageName);

        $validate["image"] = $imageName;
        $validate["event_id"] = $event_id;
        try {
            DB::beginTransaction();
            Talent::create($validate);
            DB::commit();
            return redirect()->back()->with("notification", [
                "title" => "Sukses",
                "text" => "Talent berhasil ditambahkan",
                "icon" => "success",
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with("notification", [
                "title" => "Gagal",
                "text" => $e->getMessage(),
                "icon" => "error",
            ]);
        }
    }

    public function show($id)
    {
        return response()->json([
            "talent" => Talent::find($id),
        ]);
    }

    public function update(Request $request, $id)
    {
        $validate = $request->validate([
            "name" => "required",
        ], [
            "name.required" => "Nama Talent harus diisi",
        ]);

        $event_id = Talent::find($id)->event_id;


        if ($request->hasFile("image")) {
            $image = $request->file("image");
            $imageName = "talents/talent-" . str()->slug($validate["name"]) . $event_id . "." . $image->extension();
            $oldImage = Talent::find($id)->image;
            if ($oldImage) {
                Storage::delete("public/" . $oldImage);
            }

            $image->storeAs("public/", $imageName);
            $validate["image"] = $imageName;
        }

        try {
            DB::beginTransaction();
            Talent::find($id)->update($validate);
            DB::commit();
            return redirect()->back()->with("notification", [
                "title" => "Sukses",
                "text" => "Talent berhasil diubah",
                "icon" => "success",
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with("notification", [
                "title" => "Gagal",
                "text" => $e->getMessage(),
                "icon" => "error",
            ]);
        }
    }

    public function destroy($id)
    {
        Talent::find($id)->delete();
        session()->flash("notification", [
            "title" => "Sukses",
            "text" => "Talent berhasil dihapus",
            "icon" => "success",
        ]);
    }
}
