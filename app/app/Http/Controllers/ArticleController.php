<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return Article::all();
    }
    public function show(int $id)
    {
        return Article::find($id);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:128|min:3',
            'content' => 'required|min:3',
        ]);

        $article = Article::create($request->all());
        return response()->json($article, 201);
    }


}
