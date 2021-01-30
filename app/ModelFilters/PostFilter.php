<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class PostFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];

    public function title($val)
    {
        return $this->where('title', 'like', "%{$val}%");
    }

    public function content($val)
    {
        return $this->where('content', 'like', "%{$val}%");
    }
}
