import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AppState } from './../app.state';
import * as TaskActions from './../store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';
import { TioService } from '../tio/tio.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})


export class BlockChainComponent implements OnInit {
  title = 'Ejemplo simpre de criptomonedas';
  bloques = []
  login: Observable<Tio[]>;

  constructor(private tioService: TioService, private router: Router,private store: Store<AppState>) { 
    this.login = this.store.select('login');
    if(localStorage.getItem('login')){
      const usuario = JSON.parse(localStorage.getItem('login'))
      console.log('login')
      console.log(localStorage.getItem('login'))
      if(usuario.nombre != 'error'){
        //this.router.navigate(['/']);
      }else{
        this.router.navigate(['/login']);
      }
    } 


  }
  
  ngOnInit(): void {
  }
  prueba(): void{
    alert('Prueba');
  }
  
}
