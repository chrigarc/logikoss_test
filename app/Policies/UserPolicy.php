<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
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
        return $user->hasRole(['admin']);
    }

    public function edit(?User $user, User $userParam)
    {
        return $user->hasRole(['admin']);
    }

    public function show(?User $user, User $userParam)
    {
        return true;
    }

    public function create(?User $user)
    {
        return $user->hasRole(['admin']);
    }

    public function delete(?User $user)
    {
        return $user->hasRole(['admin']);
    }

    public function update(?User $user, User $userParam)
    {
        return $user->hasRole(['admin']);
    }
}
