<?php

namespace Database\Seeders;

use App\Models\Voucher;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VoucherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Voucher::create([
            'id' => 1,
            'user_id' => 3,
            'code' => 'TESTING',
            'unit' => 'percent',
            'nominal' => 20,
            'minimal_transaction' => 100000,
            'maximal_used' => 0,
            'active' => 1,
        ]);
    }
}
