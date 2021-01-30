<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\StoreRequest;
use App\Http\Requests\Post\UpdateRequest;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse|\Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $this->authorize('viewAny', Post::class);
        $perPage = \request('perPage', 10);
        $data = Post::filter(\request()->all())->paginate($perPage);
        if(\request()->wantsJson()){
            return new JsonResponse($data);
        }
        return view('admin.posts.index', ['posts' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function create()
    {
        $this->authorize('create', Post::class);
        return view('admin.posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $post = Post::storePost($request->only(['title', 'content']), $request->file('image'));
        return redirect(route('posts.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param Post $post
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function show(Post $post)
    {
        $this->authorize('show', $post);
        return view('posts.show', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Post $post
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function edit(Post $post)
    {
        $this->authorize('edit', $post);
        return view('admin.posts.edit', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Post $post
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, Post $post)
    {
        $post->updatePost($request->only(['title', 'content']), $request->file('image'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Post $post
     * @return JsonResponse
     */
    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        $post->deletePost();
        return new JsonResponse([
            'status' => true
        ]);
    }
}
