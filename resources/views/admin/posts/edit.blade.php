@extends('layouts.app')

@section('content')
    <div class="container">
        <h2 class="subtitle">Edición de Entrada</h2>
        {!! Form::model($post, ['route' => ['posts.update', $post->id] ,'enctype' => 'multipart/form-data']) !!}
        <input type="hidden" name="_method" value="PUT">
        @include('admin.posts.form')
        <div class="columns">
            <button type="submit" class="button is-primary">
                Guardar
            </button>
            <a href="{{route('posts.index')}}" type="button" class="button">
                Cancelar
            </a>
        </div>
        {!! Form::close() !!}

    </div>
@endsection
