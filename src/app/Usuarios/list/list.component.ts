import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Services/usuario.service';
import { Usuario } from '../../Models/usuario.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users : Usuario[] = [];

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {

    this.usuarioService.getUsers().subscribe(
      data => {
        console.log(data);
        this.users = data;
      }
    )
  }

  
}
