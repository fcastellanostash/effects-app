import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/Models/usuario.model';

export const cargarUsuarios = createAction('[Cargar Usuarios]');

export const cargarUsuariosSuccess = createAction(
    '[Cargar Usuarios Success]',
    props<{usuarios : Usuario[]}>()
);

export const cargarUsuariosError = createAction(
    '[Cargar Usuarios Error]',
    props<{payload : any}>()
);