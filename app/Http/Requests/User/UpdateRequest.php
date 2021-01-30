<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRequest extends FormRequest
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
            'username' => ['required', 'string','max:255','min:8', Rule::unique('users', 'username')->ignore($this->model)],
            'email' => ['required', 'email', Rule::unique('users', 'email')->ignore($this->model)],
            'password' => ['confirmed', 'min:8'],
            'avatar' => ['nullable', 'image']
        ];
    }
}
