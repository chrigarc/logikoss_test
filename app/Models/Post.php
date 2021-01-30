<?php

namespace App\Models;

use App\Traits\PostTrait;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use Filterable;
    use PostTrait;

    protected $fillable = [
        'image', 'title', 'content', 'slug'
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

}
