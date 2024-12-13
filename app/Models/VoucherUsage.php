<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VoucherUsage extends Model
{
    /** @use HasFactory<\Database\Factories\VoucherUsageFactory> */
    use HasFactory;
    protected $guarded = ['id'];

    public function voucher()
    {
        return $this->belongsTo(Voucher::class);
    }

}
