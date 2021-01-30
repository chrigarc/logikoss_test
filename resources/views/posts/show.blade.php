@extends('layouts.app')

@section('content')
    <div class="container">
        <h2 class="title">{{$post->title}}</h2>
        @if($post->image)
        <div class="columns">
            <div class="column">
                <img src="{{url($post->image)}}" alt="">
            </div>
        </div>
        @endif
        <div class="columns">
            <div class="column is-full">
                {{$post->content}}
            </div>
        </div>
        <a href="{{route('home')}}">Regresar</a>
    </div>
@endsection
