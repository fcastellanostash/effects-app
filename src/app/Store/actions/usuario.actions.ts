import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/Models/usuario.model';

export const cargarUsuario = createAction(
    '[Cargar Usuario]',
    props<{id : string}>()
    );

export const cargarUsuarioSuccess = createAction(
    '[Cargar Usuario Success]',
    props<{usuario : Usuario}>()
);

export const cargarUsuarioError = createAction(
    '[Cargar Usuario Error]',
    props<{payload : any}>()
);