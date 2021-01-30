@extends('layouts.app')
@section('content')
    <div class="container is-max-desktop">
        <h2 class="subtitle">Creación de Entrada</h2>
        {!! Form::open(['route' => 'posts.store', 'enctype' => 'multipart/form-data']) !!}
        @include('admin.posts.form')
        <button type="submit" class="button is-primary">
            Guardar
        </button>
        {!! Form::close() !!}
    </div>
@endsection
