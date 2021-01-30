@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">{{__('posts.title')}}</div>
                    <div class="panel-body">
                        @if(!empty(@posts))
                        <ul>
                            @foreach($posts as $post)
                                <li><a href="{{route('posts.show', $post->slug)}}">{{$post->title}}</a></li>
                            @endforeach
                        </ul>
                            {{$posts->links()}}
                        @else
                            <h3>{{__('posts.empty')}}</h3>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
