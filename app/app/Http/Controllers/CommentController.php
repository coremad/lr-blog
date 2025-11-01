<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use mysql_xdevapi\Exception;

class CommentController extends Controller
{
    public function index(int $article_id)
    {
        return Comment::where('article_id', $article_id)->get();
    }
    public function show(int $id)
    {
        return Comment::find($id);
    }

    public function store(Request $request, int $article_id)
    {
        $request->merge(['article_id' => $article_id]);
        try {
            $this->validate($request, [
                'article_id' => 'required|integer:strict',
                'author_name' => 'required|max:24|min:3',
                'content' => 'required|min:3',
            ]);
        } catch (Exception $e) {
            return response()->json($e, 401);
        }
        $comm = Comment::create($request->all());
        return response()->json($comm, 201);
    }


}
