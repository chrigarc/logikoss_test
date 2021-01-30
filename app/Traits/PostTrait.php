<?php

namespace App\Traits;

use App\Models\Post;
use Illuminate\Http\UploadedFile;

trait PostTrait
{
    public static function storePost(array $request, UploadedFile $file)
    {
        $path = $file->store($request['image'], 'public');
        $data = [
            'image' => $path
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
