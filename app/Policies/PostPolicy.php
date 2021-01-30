<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function viewAny(?User $user)
    {
        return $user->hasRole(['admin', 'editor']);
    }

    public function edit(?User $user, Post $post)
    {
        return $user->hasRole(['admin', 'editor']);
    }

    public function show(?User $user, Post $post)
    {
        return true;
    }

    public function create(?User $user)
    {
        return $user->hasRole(['admin', 'editor']);
    }

    public function delete(?User $user)
    {
        return $user->hasRole(['admin', 'editor']);
    }

    public function update(?User $user, Post $post)
    {
        return $user->hasRole(['admin', 'editor']);
    }

}
