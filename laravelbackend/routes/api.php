<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

//pulicb router
Route::get('/admin', [AdminController::class, 'index']);

