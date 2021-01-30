<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Http\UploadedFile;

trait UserTrait
{
    public static function storeUser(array $request, UploadedFile $file)
    {
        $path = null;
        if($file){
            $path = $file->store($request['avatar'], 'public');
        }

        $data = [
            'avatar' => $path,
            'password' => bcrypt($request['password'])
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
        if(isset($request['password']) && $request['password']){
            $request['password'] = bcrypt($request['password']);
        }else{
            unset($request['password']);
        }
        $this->update($request);
    }

    public function deleteUser()
    {
        $this->delete();
    }
}
