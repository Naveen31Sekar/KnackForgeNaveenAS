<?php

namespace App\Http\Controllers;
use App\Models\todomodel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class todocontroller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    $tasks = todomodel::where('user_id', Auth::user()->id)->get();

    return response()->json($tasks);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Check if the user is authenticated
            // Get all the data from the request
            $tasks = $request->all();

            $tasks['user_id'] = Auth::user()->id; 
             // Ensure the user_id is set

            $tododata = todomodel::create($tasks);
    
            return response()->json(['message' => 'Task created successfully', 'task' => $tododata], 201);

    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tasks = todomodel::find($id);
        return $tasks;
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    { 
        $updatedata = $request->all();
        $tasks = todomodel::find($id);
        $tasks->task = $updatedata['task'];
        $tasks->description = $updatedata['description'];
        $tasks->status = $updatedata['status'];
        $tasks->save();
        
        // Return a JSON response instead of a plain text string
        return response()->json([
            'message' => 'Successfully Updated',
            'task' => $tasks
        ], 200); // HTTP 200 OK status
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $rowdata = todomodel::find($id);
        $rowdata->delete();
    }
}
