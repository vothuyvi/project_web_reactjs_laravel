<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\GiaviController;
use App\Http\Controllers\MonanController;
use App\Http\Controllers\LoaigvController;
use App\Http\Controllers\LoaimonController;

//pulicb router
Route::get('/admin', [AdminController::class, 'index']);
Route::get('/gia-vi', [GiaviController::class, 'new']);
Route::get('/giavi', [GiaviController::class, 'best']);
Route::get('/loaigiavi/{id}', [LoaigvController::class,'index']);
Route::get('/loai-gia-vi', [LoaigvController::class, 'AllloaiGV']);
Route::get('/cong-thuc-moi', [MonanController::class, 'monmoi']);
Route::get('/all_cong-thuc', [MonanController::class, 'index']);
Route::get('/congthuc/{id}', [LoaimonController::class, 'index']);


// Route::post('/login',[UserController::class, 'login']);
Route::group(['namespace' => 'App\Http\Controllers'], function()
{
    Route::post('login','UserController@login');
    Route::post('register','UserController@register');

});