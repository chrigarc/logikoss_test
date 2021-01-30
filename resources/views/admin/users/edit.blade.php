@extends('layouts.app')

@section('content')
    <div class="container">
        <h2 class="subtitle">Edición de Usuario</h2>
        {!! Form::model($user, ['route' => ['users.update', $user->id] ,'enctype' => 'multipart/form-data']) !!}
        <input type="hidden" name="_method" value="PUT">
        @include('admin.users.form')
        <div class="columns">
            <button type="submit" class="button is-primary">
                Guardar
            </button>
            <a href="{{route('users.index')}}" type="button" class="button">
                Cancelar
            </a>
        </div>
        {!! Form::close() !!}

    </div>
@endsection
