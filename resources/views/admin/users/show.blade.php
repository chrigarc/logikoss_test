@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>Información del Usuario</h1>
        <br>
        <img src="{{url($user->avatar)}}" alt="avatar">
        <br>
        <p>Nombre: {{$user->name}}</p>
        <p>Username: {{$user->username}}</p>
        <p>Email: {{$user->email}}</p>
        <a href="{{route('users.index')}}">Regresar</a>
    </div>
@endsection
