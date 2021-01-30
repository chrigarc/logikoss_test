<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $email = 'chrigarc@ciencias.unam.mx';
        $user = User::create([
            'name' => 'Christian Garcia',
            'username' => 'chrigarc',
            'email' => $email,
            'password' => bcrypt('12345678'),
            'avatar' => \Thomaswelton\LaravelGravatar\Facades\Gravatar::src($email)
        ]);

        $user->assignRole('admin');

        $email = 'editor@itzelcom.com';
        $user = User::create([
            'name' => 'editor',
            'username' => 'editor',
            'email' => $email,
            'password' => bcrypt('12345678'),
            'avatar' => \Thomaswelton\LaravelGravatar\Facades\Gravatar::src($email)
        ]);

        $user->assignRole('editor');

    }
}
