import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tio } from '../models/tio';
import axios from "axios";


@Injectable({
  providedIn: 'root'
})

export class TioService {
  //tioURL = 'http://localhost:8762/api/tio/';
  tioURL = 'https://servicios-profesionales.herokuapp.com/tio/';
  usuariologeado = false;
  constructor(private httpClient: HttpClient) { }


  obtenerUsuarioLogeado(): boolean{
    return this.usuariologeado;
  }
  cambiarLogeo(valor:boolean): void {
    this.usuariologeado = valor;
  }

  async lista2() {
    const response = await this.lista().toPromise();
    const lista = (response as Tio[]);
    return lista;
  }

  lista(): Observable<Tio[]> {
    return this.httpClient.get<Tio[]>(this.tioURL + 'lista');
  }

  detalle(id: number): Observable<Tio> {
    return this.httpClient.get<Tio>(this.tioURL + `detalle/${id}`);
  }

  async login(tio: Tio){
    try{
      var response;
      //response = await axios.post(this.tioURL+'login', tio);
      response = await this.httpClient.post(this.tioURL+'login', tio).toPromise();
      return response;
      
    }catch(e){
      return e.response;
    }
  }
  loginObservable(tio: Tio): Observable<any>{
    return  this.httpClient.post<any>(this.tioURL+'login', tio);
  }

  loginObservableUrol(url:string, tio: Tio): Observable<any>{
    return  this.httpClient.post<any>(url+'login', tio);
  }

  async registrar(tio: Tio){
    try{
      var response;
      response = await axios.post(this.tioURL+'nuevo', tio);
      return response;
      
    }catch(e){
      return e.response;
    }
  }

  /* registrar(tio: Tio): Observable<any> {
    return this.httpClient.post<any>(this.tioURL + 'nuevo', tio);
  } */

  nuevo(tio: Tio): Observable<any> {
    return this.httpClient.post<any>(this.tioURL + 'nuevo', tio);
  }

  actualizar(tio: Tio, id: number): Observable<any> {
    return this.httpClient.put<any>(this.tioURL + `actualizar/${id}`, tio);
  }

  borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.tioURL + `borrar/${id}`);
  }
}
