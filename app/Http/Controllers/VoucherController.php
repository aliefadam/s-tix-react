<?php

namespace App\Http\Controllers;

use App\Models\Voucher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VoucherController extends Controller
{
    public function index()
    {
        return Inertia::render("backend/Voucher/Index", [
            "title" => "Voucher",
            "vouchers" => Voucher::all(),
        ]);
    }

    public function create()
    {
        // TODO: Implement create() method to show form for creating a new voucher.
    }

    public function store(Request $request)
    {
        // TODO: Implement store() method to save a new voucher.
    }

    public function show($id)
    {
        // TODO: Implement show() method to display a specific voucher.
    }

    public function edit($id)
    {
        // TODO: Implement edit() method to show form for editing a voucher.
    }

    public function update(Request $request, $id)
    {
        // TODO: Implement update() method to update a specific voucher.
    }

    public function destroy($id)
    {
        // TODO: Implement destroy() method to delete a specific voucher.
    }
}
