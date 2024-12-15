<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;          
use Tymon\JWTAuth\Exceptions\JWTException;  
use App\Services\JWTService;
use Illuminate\Support\Facades\Hash;


use function Laravel\Prompts\alert;

class usercontroller extends Controller
{
    

    public function store(Request $request)
    {
        $login = $request->all();
        $login = User::create($login);
    }
    
    public function login(Request $request)
    { 
        $checkuser = User::where('email', $request->email)->first();
    
        if ($checkuser && Hash::check($request->password, $checkuser->password)) {  
            $jwt = JWTAuth::fromUser($checkuser); 
    
            return response()->json(['message' => 'User found', 'token' => $jwt]);
        }
    
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

}


