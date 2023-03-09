<?php

namespace App\Http\Controllers;
use App\Models\Loaigv;
use Illuminate\Http\Request;

class LoaigvController extends Controller
{
    public function index(Request $request) {
        $id= $request->id;
        $loaiGv = Loaigv::with(['giavi'])->where('id', $id)->first();
        return json_decode($loaiGv);
    }
    public function AllloaiGV() {
        return json_decode(Loaigv::all());

    }
}
