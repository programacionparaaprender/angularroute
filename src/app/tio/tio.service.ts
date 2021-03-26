import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tio } from '../models/tio';

@Injectable({
  providedIn: 'root'
})
export class TioService {

  tioURL = 'http://localhost:8080/tio/';

  constructor(private httpClient: HttpClient) { }

  lista(): Observable<Tio[]> {
    return this.httpClient.get<Tio[]>(this.tioURL + 'lista');
  }

  detalle(id: number): Observable<Tio> {
    return this.httpClient.get<Tio>(this.tioURL + `detalle/${id}`);
  }

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
