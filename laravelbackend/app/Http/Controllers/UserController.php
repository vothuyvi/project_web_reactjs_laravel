<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Services\ResponseApi;


class UserController extends Controller
{
    public function login (Request $request) {
        try {
            // lấy recore có username đó
            if (Auth()->attempt(['email' => $request->email, 'password' => $request->password]))
            {
                $user = Auth()->User();
                $token = $user->createToken('MyApp');
                $data=['user' => $user, 'token'=> $token];
                $messge="Đăng nhập thành công";
                return ResponseApi::success($data, $messge);
            }
            else 
            {
              $messge="Username or password wrong!";
              return ResponseApi::fails($messge, 401);
            }
          } catch (\Exception $e) {
            return ResponseApi::fails("Server Error!");
          }
     }
     public function register (Request $request) 
     {
      try {
        $validator = \Validator::make($request->all(), [
          'email'=> 'required|email',
          'password' => 'required|min:8|max:16',
          'passwordconfirmation' => 'required|same:password',
        ]);
        $validator->after(function($validator) use ($request) {
          $userItem = User::where('email', $request->email)->first();
          if ($userItem) {
            $validator->errors()->add('email', 'This email has been used');
          }
        });
       
        if($validator->fails()) {
          return ResponseApi::errors($validator->errors());
        }
        else {
          $user = new User();
          $user->email = $request->email;
          $user->password = Hash::make($request->password);
          $user->save();
          $msg="Register success !";
          return ResponseApi::notifis($msg);
        }
      }catch(\Exception $e) {
        return ResponseApi::fails("Server Error!");
      }
     }
    
}

