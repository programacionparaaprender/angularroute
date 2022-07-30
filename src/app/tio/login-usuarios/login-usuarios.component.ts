import { Component, OnInit } from '@angular/core';
import { Tio } from '../../models/tio';
import { TioService } from '../tio.service';
import { Router } from '@angular/router';

import { AppState } from './../../app.state';
import * as TaskActions from './../../store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from 'src/app/accederwebtoken/token.service';


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
  constructor(
    private tioService: TioService, 
    private router: Router,
    private tokenService: TokenService,
    private store: Store<AppState>) { 
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
    
    try{

      this.tio = new Tio(this.nombre, this.email, this.password);
      await this.tokenService.login(this.tio);
      var response = await this.tioService.login(this.tio);
      if(response.status==200){
        const data = response.data;
        const usuario = data;
        this.store.dispatch(new TaskActions.InicioUsuario({
          id: usuario.id,
          nombre: usuario.nombre,
          email: usuario.email,
          password: usuario.password
        }) );

        
        this.router.navigate(['/']);
      }else{
        console.log('ocurrio un error')
        console.log(JSON.stringify(response));
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
    }catch(e){
      console.log(e);
    }
  }
}
