
// Importaciones
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import * as UsersActions from './../../store/users.actions';

@Component({
  selector: 'app-añadir-usuario',
  templateUrl: './añadir-usuario.component.html',
  styleUrls: ['./añadir-usuario.component.css']
})

export class AñadirUsuarioComponent implements OnInit {
  
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  
  }

  // Disparamos la acción
  AñadirUsuario(id, username, password, firstName, lastName) {
    this.store.dispatch(new UsersActions.AñadirUsuario({
      id: id, 
      username: username, 
      password: password, 
      firstName: firstName, 
      lastName: lastName
    }) )
  }

}
