<?php

use Illuminate\Database\Seeder;
use \Spatie\Permission\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            'admin', 'editor'
        ];

        foreach ($roles as $role){
            if(Role::where('name', $role)->count() === 0){
                Role::create(['name' => $role]);
            }
        }
    }
}
