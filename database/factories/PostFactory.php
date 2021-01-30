<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Post;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Post::class, function (Faker $faker) {
    $title = $faker->text(20);
    return [
        'title' => $title,
        'content' => $faker->realText(3000),
        'slug' => Str::slug($title),
        'image' =>  \Thomaswelton\LaravelGravatar\Facades\Gravatar::src($faker->email)
    ];
});
