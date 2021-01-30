<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return request()->user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255', 'min:3'],
            'email' => ['required', 'email', 'unique:users,email', 'max:255'],
            'username' => ['required', 'string','max:255', 'min:8','unique:users,username'],
            'password' => ['required', 'string', 'confirmed', 'min:8'],
            'avatar' => ['nullable', 'image']
        ];
    }
}
