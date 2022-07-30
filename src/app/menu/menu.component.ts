import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppState } from './../app.state';
import * as TaskActions from './../store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUsuariosComponent } from '../tio/login-usuarios/login-usuarios.component';
import { Location } from "@angular/common";
import { TokenService } from 'src/app/accederwebtoken/token.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  //@ViewChild(LoginUsuariosComponent) child;

  login: Observable<Tio[]>;
  tio: Tio;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  usuariologeado = false;
  constructor(
    location: Location, 
    private router: Router, 
    private tokenService: TokenService,
    private store: Store<AppState>) {
    this.login = this.store.select('login');
    if(localStorage.getItem('login')){
      const usuario = JSON.parse(localStorage.getItem('login'))
      if(usuario.nombre != 'error'){
        this.usuariologeado = true;
      }else{
        this.usuariologeado = false;
        
        console.log('location')
        //console.log(this.router.url)
        //console.log(this.activatedRoute.url);
        //this.router.navigate(['/login']);
      }
    }else{

    }
  }
  /* ngAfterViewInit() {
    this.usuariologeado = this.child.usuariologeado
  } */
  logout() {
    const usuario: Tio = {
      id: 1,
      nombre: "error",
      password: "123456",
      email: "error@gmail.com"
    }
    this.usuariologeado = false;
    this.store.dispatch(new TaskActions.InicioUsuario(usuario) )
    this.router.navigate(['/login']);
    this.tokenService.logout();
  }

  ngOnInit() {
  }

}
