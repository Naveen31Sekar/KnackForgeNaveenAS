<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class todomodel extends Model
{
    use HasFactory;
    protected $fillable=['task','description','status', 'user_id'];

    public function task(){
        return $this->belongsTo(User::class);
    }
}

