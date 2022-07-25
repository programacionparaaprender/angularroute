import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, finalize } from 'rxjs/operators';
import { TokenService } from 'src/app/accederwebtoken/token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class TokenizedInterceptor implements HttpInterceptor {
    constructor(private token: TokenService) { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      let authReq = req;
      const token = this.token.obtenerToken();
      if (token != null) {
        authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
      }
      return next.handle(authReq);
    }
  }
  
  export const TokenizedInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: TokenizedInterceptor, multi: true }
  ];