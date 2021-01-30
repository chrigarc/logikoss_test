@extends('layouts.app')
@section('content')
<div class="container">
    <section class=" is-primary is-fullheight">
        <div class="">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form method="POST" action="{{ route('login') }}" class="box">
                            @csrf

                            <div class="field">
                                <label for="" class="label">Email</label>
                                <div class="control has-icons-left">
                                    <input type="email" name="email" placeholder="e.g. bobsmith@gmail.com" class="input {{$errors->has('email') ? ' is-danger' : ''}}" required>
                                    <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                                    </span>
                                    @if($errors->has('email'))
                                        <p class="help is-danger">{{$errors->first('email')}}</p>
                                    @endif
                                </div>
                            </div>
                            <div class="field">
                                <label for="" class="label">Password</label>
                                <div class="control has-icons-left">
                                    <input type="password" name="password" placeholder="*******" class="input" required>
                                    <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                                </div>
                            </div>
                            <div class="field">
                                <label for="" class="checkbox">
                                    <input type="checkbox">
                                    Remember me
                                </label>
                            </div>
                            <div class="field">
                                <button class="button is-success">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
