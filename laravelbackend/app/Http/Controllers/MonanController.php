<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Monan;

class MonanController extends Controller
{
    public function monmoi() {
        return json_encode (Monan::where('monmoi', '=', 1)->get());
      
    }
    public function index() {
        return json_decode(Monan::all());
    }
   
}
