<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loaimon extends Model
{
    use HasFactory;
    protected $table = 'loaimon';


    public function monan() {
        return $this->hasMany(Monan::class, 'id');
    }
}

