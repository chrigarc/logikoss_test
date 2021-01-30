<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Logikoss
                    </a>
                </div>

                @guest
                @else
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Herramientas
                        </a>

                        <div class="navbar-dropdown">
                            @if(auth()->user()->hasRole('admin'))
                            <a href="{{route('users.index')}}" class="navbar-item">
                                Gestión de Usuarios
                            </a>
                            @endif
                            <a href="{{route('posts.index')}}" class="navbar-item">
                                Gestión de Posts
                            </a>
                        </div>
                    </div>
                @endguest

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            @guest
                            <a href="{{route('login')}}" class="button is-light">
                                Log in
                            </a>
                                @else
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                                <a  onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"
                                    class="button is-dark">
                                    Log out
                                </a>
                            @endguest
                        </div>
                    </div>
                </div>
            </div>
        </nav>


        <main>
            <section class="section">
                @yield('content')
            </section>
        </main>
    </div>
</body>
</html>
