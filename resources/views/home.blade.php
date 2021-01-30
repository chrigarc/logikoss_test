@extends('layouts.app')

@section('content')
    <div class="container">
        <h1 class="tile">Blog</h1>
            @if($posts->count() > 0)
                <ul>
                    @foreach($posts as $post)
                        <li><a href="{{route('posts.show', $post->slug)}}">{{$post->title}}</a></li>
                    @endforeach
                </ul>
                {{$posts->links()}}
            @else
                <h1 class="title">{{__('posts.empty')}}</h1>
            @endif
        </div>
    </div>
@endsection
