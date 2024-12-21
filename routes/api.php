<?php

use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;

Route::get("/transaction/{id}", [TransactionController::class, "show"])->name("transaction.show");
Route::get("/find-transaction/{invoice}", [TransactionController::class, "findByInvoice"])->name("find-transaction-by-invoice");
