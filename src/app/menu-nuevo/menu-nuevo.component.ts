import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { AppState } from './../app.state';
import * as TaskActions from './../store/login.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUsuariosComponent } from '../tio/login-usuarios/login-usuarios.component';
import { RegistrarUsuariosComponent } from '../tio/registrar-usuarios/registrar-usuarios.component';
import { Location } from "@angular/common";
import { TokenService } from 'src/app/accederwebtoken/token.service';


@Component({
  selector: 'app-menu-nuevo',
  templateUrl: './menu-nuevo.component.html',
  styleUrls: ['./menu-nuevo.component.css']
})
export class MenuNuevoComponent  {
  @Input() texto = 'login';
}
