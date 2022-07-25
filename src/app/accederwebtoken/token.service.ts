import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tio } from '../models/tio';
import axios from "axios";
import { tokenName } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokenURL = 'http://localhost:8762/token/';
  tioURL = 'http://localhost:8762/api/tio/';
  apiv1URL = 'http://localhost:9756/api/v1';
  usuariologeado = false;
  constructor(private httpClient: HttpClient) { }

  obtenerToken(){
    const token = localStorage.getItem('token');
    return token;
  }

  async listaName(name: string) {
    var response;
    try{
        response = await this.httpClient.get<Tio[]>(this.apiv1URL + '/users/' + name + '/todos').toPromise();
        //response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista').toPromise();        
        console.log('response');
        console.log(JSON.stringify(response));
    }catch(e){
        console.log(e);
        return e.response;
    }
    return response;
  }

  async listaId() {
    var response;
    try{
        const id:string = "0";
        response = await this.httpClient.get<Tio[]>(this.apiv1URL + '/users/' + id + '/id').toPromise();
        //response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista').toPromise();        
        console.log('response');
        console.log(JSON.stringify(response));
    }catch(e){
        console.log(e);
        return e.response;
    }
    return response;
  }

  async listaSinToken() {
    var response;
    try{
        response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista').toPromise();
        //response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista').toPromise();        
        console.log('response');
        console.log(JSON.stringify(response));
    }catch(e){
        console.log(e);
        return e.response;
    }
    return response;
  }


  async lista() {
    var response;
    try{
        const token = localStorage.getItem('token');
        console.log('token: ' + token);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          });
        const requestOptions = { headers: headers };
        response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista', requestOptions).toPromise();
        //response = await this.httpClient.get<Tio[]>(this.tioURL + 'lista').toPromise();        
        console.log('response');
        console.log(JSON.stringify(response));
    }catch(e){
        console.log(e);
        return e.response;
    }
    return response;
  }

  async login(tio: Tio) {
    var token = "";
    const user = {
        "username":"randomuser123",
        "password":"password"
    }
    try{
        var response;
        // en el post también al final se coloca , { 'headers': headers }
        response = await this.httpClient.post<any>(this.tokenURL + 'login', user).toPromise();
        if(response){
            token = response.token;
            window.localStorage.removeItem('token');
            window.localStorage.setItem('token', token);
            return token;
        }
        
    }catch(e){
        console.log(e);
        return token;
    }
    
  } 
}
