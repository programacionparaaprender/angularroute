import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TokenService } from 'src/app/accederwebtoken/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tio } from 'src/app/models/tio';


@Component({
  selector: 'app-tokenjava',
  templateUrl: './tokenjava.component.html',
  styleUrls: ['./tokenjava.component.css']
})
export class TokenJavaComponent implements OnInit {
  inputtoken:string ="";
  lista:any = {};
  nombre:string="";
  constructor(
    private tokenService: TokenService,
  ) { 
    
  }

  ngOnInit() {
  }

  initFechaInput(fecha){

  }

  async obtenerUsuariosSinToken(){
    this.lista = await this.tokenService.listaSinToken();
  }

  async obtenerToken(){
    const tio:Tio = {
      id: 0,
      nombre: "",
      email: "",
      password: ""
    };
    var token = await this.tokenService.login2();
    this.inputtoken = token;
  }

  async obtenerUsuarios(){
    this.lista = await this.tokenService.lista();
  }

  async obtenerUsuariosAPI2Name(){
    this.lista = await this.tokenService.listaName(this.nombre);
    console.log('lista');
    console.log(JSON.stringify(this.lista));
  }
  async obtenerUsuariosAPI2Id(){
    this.lista = await this.tokenService.listaId();
    console.log('lista');
    console.log(JSON.stringify(this.lista));
  }

}
