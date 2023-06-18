import { inject, TestBed } from '@angular/core/testing';

import { RegistrarUsuariosComponent } from 'src/app/tio/registrar-usuarios/registrar-usuarios.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// routes
import { AppRoutingModule } from "src/app/app-routing.module";
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { storageSyncMetaReducer } from 'ngrx-store-persist';
import { taskReducer } from 'src/app/store/tasks.reducer';
import { userReducer } from 'src/app/store/users.reducer';
import { loginReducer } from 'src/app/store/login.reducer';

import { Tio } from 'src/app/models/tio';
import { TioService } from 'src/app/tio/tio.service';
//import { of  } from 'rxjs/internal/observable/of';
import { Observable, of  } from 'rxjs';
//LoginUsuariosComponent

var tiosBDServicio: Tio[] = [
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

describe('TioService', () => {

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        providers:[ TioService ],
        declarations: [],
      imports:[
        FormsModule, 
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({
          tasks: taskReducer,
          users: userReducer,
          login: loginReducer
        }, { 
          metaReducers: [storageSyncMetaReducer] 
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });
  /*
  beforeEach(() => {
    const fixture = TestBed.createComponent(RegistrarUsuariosComponent);
    const component = fixture.componentInstance;
    const tioService = fixture.debugElement.injector.get(TioService);
    spyOn(tioService, 'lista2').and.callFake(() -> tiosBDServicio);
    fixture.detectChanges();
  });
  */
    /*
  beforeEach(() => {
    const fixture = TestBed.createComponent(RegistrarUsuariosComponent);
    const component = fixture.componentInstance;
    const tioService = fixture.debugElement.injector.get(TioService);
    const observable:Observable<Tio[]> = of(tiosBDServicio);
    spyOn(tioService, 'lista').and.callFake(() -> observable);
    fixture.detectChanges();
  });
*/
  it('Comparar listas de usuarios', inject([TioService], (tioService: TioService) => {
    
    tioService.lista().subscribe(data=>{
        expect(data).toEqual(tiosBDServicio);
    },(error)=>{
      console.log(error)
    });
  }));
  it('Comparar tamaño de la lista debe ser 6', inject([TioService], (tioService: TioService) => {
    
    tioService.lista().subscribe(data=>{
        expect(data.length).toEqual(6);
    },(error)=>{
      console.log(error)
    });
  }));

  it('Error por url incorrecta', inject([TioService], (tioService: TioService) => {
    var tio = 
      {
          nombre:"luis1371113711",
          email:"alberto13711@gmail.com",
          password:"12345678"
      };
    var checkData = 
      {
          id:1,
          nombre:"luis13711",
          email:"alberto13711@gmail.com",
          password:"123456"
      };
    const url:string = 'http://localhost:8762/api/tio/';
    tioService.loginObservableUrol(url, tio).subscribe(data=>{
        expect(data.data).toEqual(checkData);
    },(error)=>{
      console.log(error)
      expect(error.response.status).toEqual(400);
    });
  }));


//pendiente verificar
  it('Debe retornar un error al hacer mal el login', inject([TioService], (tioService: TioService) => {
    var tio = 
      {
          nombre:"luis1371113711",
          email:"alberto13711@gmail.com",
          password:"12345678"
      };
    var checkData = 
      {
          id:1,
          nombre:"luis13711",
          email:"alberto13711@gmail.com",
          password:"123456"
      };
    tioService.loginObservable(tio).subscribe(data=>{
        expect(data.data).toEqual(checkData);
    },(error)=>{
      console.log(error)
    });
  }));

  it('Comparar valor retornado luego del login', inject([TioService], (tioService: TioService) => {
    var tio = 
      {
          nombre:"luis13711",
          email:"alberto13711@gmail.com",
          password:"123456"
      };
    var checkData = 
      {
          id:1,
          nombre:"luis13711",
          email:"alberto13711@gmail.com",
          password:"123456"
      };
    tioService.loginObservable(tio).subscribe(data=>{
        expect(data.data).toEqual(checkData);
    },(error)=>{
      console.log(error)
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
