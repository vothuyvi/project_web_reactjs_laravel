<?php
namespace App\Services;
class ResponseApi {
    public static function success ($data, $message) {

        return response()->json([
            'status' => true,
            'data' => $data,
            'message'=>$message
        ], 200);
    }
    public static function fails ($message, $status = 500) {

        return response()->json([
            'status' => false,
            'message' => $message
        ], $status);
    }
    public static function notifis ($msg) {
        return response()->json([
            'status' => true,
            'msg'=> $msg
        ]);
    }

    public static function errors ($errors) {
        return response()->json([
            'status' => false,
            'errors' => $errors
        ],500);
    }
}