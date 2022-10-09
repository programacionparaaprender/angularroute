import { Component, OnInit } from '@angular/core';
import { Tio } from '../../models/tio';
import { TioService } from '../tio.service';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppState } from './../../app.state';
import * as TaskActions from './../../store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {
  login: Observable<Tio[]>;
  tio: Tio;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  registerForm: FormGroup;
  constructor(
    private tioService: TioService, 
    private fb: FormBuilder, 
    private router: Router, 
    private store: Store<AppState>) {
      this.registerForm = this.fb.group({ 
        id:0,
        nombre: ['', Validators.required], 
        email: ['', Validators.maxLength(32)],
        password: ['', Validators.required]
      }); 
      this.login = this.store.select('login');
      if(localStorage.getItem('login')){
        const usuario = JSON.parse(localStorage.getItem('login'))
        //console.log('login')
        //console.log(localStorage.getItem('login'))
        if(usuario.nombre != 'error'){
          this.router.navigate(['/']);
        }
      }
  }

  ngOnInit() {
  }

  async onCreate() {
    if(!this.registerForm.valid){
      return;
    }
    this.tio = new Tio(this.nombre, this.email, this.password);
    var response = await this.tioService.registrar(this.tio);
    if(response.status==200){
      const data = response.data;
      const usuario = data[0];
      this.store.dispatch(new TaskActions.RegistroUsuario({
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      }) )
      this.router.navigate(['/']);
    }else{
      console.log('ocurrio un error')
    }
  }
}
