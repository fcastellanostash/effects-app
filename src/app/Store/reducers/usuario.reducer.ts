import { Action, createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';
import { Usuario } from '../../Models/usuario.model';

export interface UsuarioState {
    id      : string;
    user    : Usuario,
    loading : boolean,
    loaded  : boolean,
    error   : any
}

export const usuarioInitialState: UsuarioState = {
    id       : null!,
    user     : null!,
    loading  : false,
    loaded   : false,
    error    : null}

const _usuarioReducer = createReducer(usuarioInitialState,
    on(cargarUsuario, (state, {id}) => ({ 
        ...state, 
        loading: true,
        id:id
    })),
    on(cargarUsuarioSuccess, (state, {usuario}) => ({ 
        ...state, 
        loading: false,
        loaded : true,
        user  : {...usuario}
    })),
    on(cargarUsuarioError, (state, {payload}) => ({ 
        ...state, 
        loading: false,
        loaded : false,
        error  : 
        {
            name     : payload.name,
            message  : payload.message,
            url      : payload.url
        }
    })),
);

export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action);
}