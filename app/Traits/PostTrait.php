<?php

namespace App\Traits;

use App\Models\Post;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

trait PostTrait
{
    public static function storePost(array $request, UploadedFile $file = null)
    {
        $path = null;

        if($file){
            $path = $file->store($request['title'], 'public');
        }

        $data = [
            'image' => $path,
            'slug' => Str::slug($request['title'])
        ];
        $request = array_merge($data, $request);
        $user = Post::create($request);
        return $user;
    }

    public function updatePost(array $request, $file = null)
    {
        if($file){
            $path = $file->store($request['image'], 'public');
            $request['image'] = $path;
        }
        $this->update($request);
    }

    public function deletePost()
    {
        $this->delete();
    }
}
