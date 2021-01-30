@extends('layouts.app')

@section('content')
    <div class="container">
        <h2 class="tile">Usuario Nuevo</h2>
        {!! Form::open(['route' => 'users.store'], ['enctype' => 'multipart/form-data']) !!}
        @include('admin.users.form')
        <button type="submit" class="button is-primary">
            Guardar
        </button>
        {!! Form::close() !!}
    </div>
@endsection
