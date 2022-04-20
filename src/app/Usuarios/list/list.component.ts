import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.reducer';
import { cargarUsuarios } from 'src/app/Store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users   : Usuario[] = [];
  loading : boolean = false;
  error   : any;

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {


  this.store.dispatch(cargarUsuarios())

  this.store.select('usuarios').subscribe(
    ({users, loading, error}) => 
    {
      this.users = users;
      this.loading = loading;
      this.error = error
    }
  )

    // this.usuarioService.getUsers().subscribe(
    //   data => {
    //     console.log(data);
    //     this.users = data;
    //   }
    // )
  }

  
}
