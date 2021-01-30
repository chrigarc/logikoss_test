<div class="columns">
    <div class="column is-one-third">
        <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
                {!! Form::text('name', null, ['class' => 'input '.($errors->has('name') ? 'is-danger' : ''), 'required' => true]) !!}
            </div>
            @if ($errors->has('name'))
                <p class="help is-danger">{{$errors->first('name')}}</p>
            @endif
        </div>
    </div>
    <div class="column is-one-third">
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                {!! Form::email('email', null, ['class' => 'input '.($errors->has('email') ? 'is-danger' : ''), 'required' => true]) !!}
            </div>
            @if ($errors->has('email'))
                <p class="help is-danger">{{$errors->first('email')}}</p>
            @endif
        </div>
    </div>
    <div class="column is-one-third">
        <div class="field">
            <label class="label">Nombre de usuario</label>
            <div class="control">
                {!! Form::text('username', null, ['class' => 'input '.($errors->has('username') ? 'is-danger' : ''), 'required' => true]) !!}
            </div>
            @if ($errors->has('username'))
                <p class="help is-danger">{{$errors->first('username')}}</p>
            @endif
        </div>
    </div>
</div>
<div class="columns">
    <div class="column is-one-third">
        <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
                {!! Form::password('password', ['class' => 'input '.($errors->has('password') ? 'is-danger' : '')]) !!}
            </div>
            @if ($errors->has('name'))
                <p class="help is-danger">{{$errors->first('name')}}</p>
            @endif
        </div>
    </div>

    <div class="column is-one-third">
        <div class="field">
            <label class="label">Confirmar Contraseña</label>
            <div class="control">
                {!! Form::password('password_confirmation', ['class' => 'input '.($errors->has('password') ? 'is-danger' : '')]) !!}
            </div>
            @if ($errors->has('password'))
                <p class="help is-danger">{{$errors->first('password')}}</p>
            @endif
        </div>
    </div>

    <div class="column is-one-third">
        <div class="field">
            <label class="label">Avatar</label>
            <label class="file-label">
                <input class="file-input" type="file" name="avatar">
                <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Seleccionar archivo
      </span>
    </span>
            </label>

        </div>
    </div>
</div>

