import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from 'rxjs';
import { cargarUsuarios } from "../actions";
import { UsuarioService } from '../../Services/usuario.service';
import { cargarUsuariosSuccess, cargarUsuariosError } from '../actions/usuarios.actions';

@Injectable()
export class UsuariosEffects{

    constructor(
        private actions$ : Actions,
        private userService : UsuarioService
    ){}

    cargarUsuarios$ = createEffect(
        () => this.actions$
        .pipe(
            ofType(cargarUsuarios),
            mergeMap(() => this.userService.getUsers()
            .pipe(
                map( users => cargarUsuariosSuccess({ usuarios : users})),
                catchError(err => of(cargarUsuariosError({ payload : err})))
            )
            )
        )
    )
}