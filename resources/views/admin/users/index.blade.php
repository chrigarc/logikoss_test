@extends('layouts.app')

@section('content')
    <div class="container">
        <h2 class="tile">Usuarios Registrados</h2>
        <user-table url="{{route('users.index')}}"/>
    </div>
@endsection
