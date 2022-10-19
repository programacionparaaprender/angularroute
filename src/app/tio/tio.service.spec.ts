import { inject, TestBed } from '@angular/core/testing';

import { RegistrarUsuariosComponent } from 'src/app/tio/registrar-usuarios/registrar-usuarios.component';

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// routes
import { AppRoutingModule } from "src/app/app-routing.module";
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { storageSyncMetaReducer } from 'ngrx-store-persist';
import { taskReducer } from 'src/app/store/tasks.reducer';
import { userReducer } from 'src/app/store/users.reducer';
import { loginReducer } from 'src/app/store/login.reducer';

import { Tio } from 'src/app/models/tio';
import { TioService } from 'src/app/tio/tio.service';
import { of } from 'rxjs/internal/observable/of';

describe('TioService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        providers:[ TioService ],
        declarations: [],
      imports:[
        FormsModule, 
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({
          tasks: taskReducer,
          users: userReducer,
          login: loginReducer
        }, { 
          metaReducers: [storageSyncMetaReducer] 
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });
  it('Comparar listas de usuarios', inject([TioService], (tioService: TioService) => {
    var checkData = [
        {
            id:1,
            nombre:"luis13711",
            email:"alberto13711@gmail.com",
            password:"123456"
        },
        {
            id:3,
            nombre:"asdasd",
            email:"juankferro@gmail.com",
            password:"123123"
        },
        {
            id:4,
            nombre:"ejemplo1234",
            email:"ejemplo1234@hiper.com.pe",
            password:"123456"
        },
        {
            id:6,
            nombre:"ejemplo12345",
            email:"ejemplo12345@hiper.com.pe",
            password:"123456"
        },
        {
            id:8,
            nombre:"a",
            email:"neyalab532@svcache.com",
            password:"12345"
        },
        {
            id:10,
            nombre:"gaby",
            email:"gaby@gmail.com",
            password:"12345678"
        }];
    tioService.lista().subscribe(data=>{
        expect(data).toEqual(checkData);
    });
  }));
  it('Se obtiene una lista de usuarios', () => {
    var tioService = TestBed.get(TioService);
    tioService.lista = jasmine.createSpy().and.returnValue(of(true));
    //const methodSpy = spyOn(tioService, 'cambiarLogeo');
    /* const tio:Tio = {
        nombre:"luis13711",
        email:"alberto13711@gmail.com",
        password:"123456"
    };
    tioService.login(tio); */
    //expect(methodSpy).toHaveBeenCalled();
  });

});
