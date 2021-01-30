<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Http\UploadedFile;

trait UserTrait
{
    public static function storeUser(array $request, UploadedFile $file)
    {
        $path = $file->store($request['avatar'], 'public');
        $data = [
            'avatar' => $path
        ];
        $request = array_merge($data, $request);
        $user = User::create($request);
        return $user;
    }

    public function updateUser(array $request, $file = null)
    {
        if($file){
            $path = $file->store($request['avatar'], 'public');
            $request['avatar'] = $path;
        }
        $this->update($request);
    }

    public function deleteUser()
    {
        $this->delete();
    }
}
