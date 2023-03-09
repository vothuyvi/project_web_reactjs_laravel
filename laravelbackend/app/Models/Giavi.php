<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Giavi extends Model
{
    use HasFactory;
    protected $table = 'giavi';
    
    public function loaiGv() {
        return $this->belongsTo(Loaigv::class, 'id_loaiGV', 'id');
    }
}
