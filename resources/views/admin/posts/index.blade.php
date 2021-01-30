@extends('layouts.app')

@section('content')
    <div class="container">
        <h2 class="tile">Entrdas Registradas</h2>
        <post-table url="{{route('posts.index')}}"/>
    </div>
@endsection
