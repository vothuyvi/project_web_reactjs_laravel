<?php

namespace App\Http\Controllers;
use App\Models\Loaimon;
use Illuminate\Http\Request;

class LoaimonController extends Controller
{
    public function index(Request $request) {
        $id= $request->id;
        $loaiMon = Loaimon::with(['monan'])->where('id', $id)->first();
        return json_decode($loaiMon);
    }
}
