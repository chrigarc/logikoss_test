<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class UserFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];

    public function username($val)
    {
        return $this->where('username', 'like', "%{$val}%");
    }

    public function email($val)
    {
        return $this->where('email', 'like', "%{$val}%");
    }

    public function name($val)
    {
        return $this->where('name', 'like', "%{$val}%");
    }
}
