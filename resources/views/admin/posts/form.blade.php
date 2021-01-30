<div class="columns">
    <div class="column is-half">
        <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
                {!! Form::text('title', null, ['class' => 'input '.($errors->has('title') ? 'is-danger' : ''), 'required' => true]) !!}
            </div>
            @if ($errors->has('title'))
                <p class="help is-danger">{{$errors->first('title')}}</p>
            @endif
        </div>
    </div>

    <div class="column is-half">
        <div class="field">
            <label class="label">Avatar</label>
            <label class="file-label">
                <input class="file-input" type="file" name="image">
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
<div class="columns">
    <div class="column is-full">
        <div class="field">
            <label class="label">Contenido</label>
            <div class="control">
                {!! Form::textarea('content', null, ['class' => 'input '.($errors->has('content') ? 'is-danger' : ''), 'required' => true]) !!}
            </div>
            @if ($errors->has('content'))
                <p class="help is-danger">{{$errors->first('content')}}</p>
            @endif
        </div>
    </div>
</div>
