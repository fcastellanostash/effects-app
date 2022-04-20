import { Action, createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions';
import { Usuario } from '../../Models/usuario.model';

export interface UsuariosState {
    users    : Usuario[],
    loading  : boolean,
    loaded   : boolean,
    error    : any
}

export const usuariosInitialState: UsuariosState = {
    users    : [],
    loading  : false,
    loaded   : false,
    error    : null}

const _usuariosReducer = createReducer(usuariosInitialState,
    on(cargarUsuarios, state => ({ ...state, loading: true})),
    on(cargarUsuariosSuccess, (state, {usuarios}) => ({ 
        ...state, 
        loading: false,
        loaded : true,
        users  : [...usuarios]
    })),
    on(cargarUsuariosError, (state, {payload}) => ({ 
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

export function usuariosReducer(state: UsuariosState | undefined, action: Action) {
    return _usuariosReducer(state, action);
}