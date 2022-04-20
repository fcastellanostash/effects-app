import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../Store/app.reducer';
import { Store } from '@ngrx/store';
import { cargarUsuario } from '../../Store/actions/usuario.actions';
import { Usuario } from '../../Models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  user! : Usuario;
  loading : boolean = false;
  error   : any;

  constructor(private router : ActivatedRoute,
              private store : Store<AppState>) { }

  ngOnInit(): void {
      this.router.params.subscribe(
          ({id}) => this.store.dispatch(cargarUsuario({id : id}))

      )

      this.store.select('usuario')
        .subscribe( ({user, loading,error}) => {
          this.user = user
          this.loading = loading
          this.error = error

        });

  }

}
