<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class EventController extends Controller
{
   public function index()
{
    return Inertia::render('User/Show', [
        'users' => User::all(),
    ]);
}
}