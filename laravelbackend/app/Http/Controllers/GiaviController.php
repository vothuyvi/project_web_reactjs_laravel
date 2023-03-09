<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Giavi;
class GiaviController extends Controller
{
    function new()
    {
        return json_encode(Giavi::where('new', '=', 1)->get());
    }
    function best()
    {
        return json_encode(Giavi::where('bestseller', '=', 1)->get());
    }
    
   
}
