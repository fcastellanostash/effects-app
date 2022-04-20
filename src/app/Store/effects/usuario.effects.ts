import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from 'rxjs';
import { UsuarioService } from '../../Services/usuario.service';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';

@Injectable()
export class UsuarioEffects{

    constructor(
        private actions$ : Actions,
        private userService : UsuarioService
    ){}

    cargarUsuario$ = createEffect(
        () => this.actions$
        .pipe(
            ofType(cargarUsuario),
            mergeMap(action => this.userService.getUserById(action.id)
            .pipe(
                map( user => cargarUsuarioSuccess({ usuario : user})),
                catchError(err => of(cargarUsuarioError({ payload : err})))
            )
            )
        )
    )
}