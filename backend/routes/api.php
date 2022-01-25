<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades\Mail;
use App\Mail\Welcome;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:web')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/post', 'App\Http\Controllers\PostController@index');

Route::middleware('auth:web')->post('/post', 'App\Http\Controllers\PostController@store');

Route::get('/to', function () {
    Mail::to('ahrocha@gmail.com')->send(new Welcome('Arley'));
});