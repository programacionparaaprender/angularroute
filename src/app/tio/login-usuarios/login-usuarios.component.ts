import { Component, OnInit } from '@angular/core';
import { Tio } from '../../models/tio';
import { TioService } from '../tio.service';
import { Router } from '@angular/router';

import { AppState } from './../../app.state';
import * as TaskActions from './../../store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {
  login: Observable<Tio[]>;
  tio: Tio;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  constructor(private tioService: TioService, private router: Router,private store: Store<AppState>) { 
    this.login = this.store.select('login');
    if(localStorage.getItem('login')){
      const usuario = JSON.parse(localStorage.getItem('login'))
      console.log('login')
      console.log(localStorage.getItem('login'))
      if(usuario.nombre != 'error'){
        this.router.navigate(['/']);
      }
    }

  }

  ngOnInit() {
  }

  

  async onLogin() {
    
    this.tio = new Tio(this.nombre, this.email, this.password);
    var response = await this.tioService.login(this.tio);
    if(response.status==200){
      //console.log('data:')
      //console.log(JSON.stringify(response.data))
      //[{"id":1,"nombre":"luis13711","email":"alberto13711@gmail.com","password":"123456"}]
      const data = response.data;
      const usuario = data[0];
      //console.log(response.data[0].nombre)
      
      this.store.dispatch(new TaskActions.InicioUsuario({
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      }) )
      this.router.navigate(['/']);
    }else{
      console.log('ocurrio un error')
    }
    /* this.tioService.login(this.tio).subscribe(
      data => {
        console.log('data:')
        console.log(JSON.stringify(data))
        console.log(JSON.stringify(data[0]))
        //alert(data.mensaje);
        //this.router.navigate(['/']);
      },
      err => {
        alert(err.error.mensaje);
      }
    ); */
  }
}
