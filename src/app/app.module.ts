import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

import { storageSyncMetaReducer } from 'ngrx-store-persist';

import { taskReducer } from './store/tasks.reducer';
import { userReducer } from './store/users.reducer';
import { loginReducer } from './store/login.reducer';


import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component';
import { ViejaComponent } from './juegos/vieja/vieja.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';

import { BlockChainComponent } from './blockchain/blockchain.component';



import { HttpClientModule } from '@angular/common/http';
/* import { 
  MatToolbarModule, 
  //MatIconModule, 
  //MatSidenavModule, 
  //MatListModule, 
  //MatButtonModule 
} from  '@angular/material'; */


localStorage.setItem('URL', 'https://localhost:44382/');




  import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
  import { MatIconRegistry } from '@angular/material/icon';
  import { MatAutocompleteModule } from '@angular/material/autocomplete';
  import { MatBadgeModule } from '@angular/material/badge';
  import { MatButtonModule } from '@angular/material/button';
  import { MatButtonToggleModule } from '@angular/material/button-toggle';
  import { MatCardModule } from '@angular/material/card';
  import { MatCheckboxModule } from '@angular/material/checkbox';
  import { MatChipsModule } from '@angular/material/chips';
  import { MatStepperModule } from '@angular/material/stepper';
  import { MatDatepickerModule } from '@angular/material/datepicker';
  import { MatDialogModule } from '@angular/material/dialog';
  import { MatExpansionModule } from '@angular/material/expansion';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatGridListModule } from '@angular/material/grid-list';
  import { MatIconModule } from '@angular/material/icon';
  import { MatInputModule } from '@angular/material/input';
  import { MatListModule } from '@angular/material/list';
  import { MatMenuModule } from '@angular/material/menu';
  import { MatPaginatorModule } from '@angular/material/paginator';
  import { MatProgressBarModule } from '@angular/material/progress-bar';
  import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
  import { MatRadioModule } from '@angular/material/radio';
  import { MatRippleModule } from '@angular/material/core';
  import { MatSelectModule } from '@angular/material/select';
  import { MatSidenavModule } from '@angular/material/sidenav';
  import { MatSliderModule } from '@angular/material/slider';
  import { MatSlideToggleModule } from '@angular/material/slide-toggle';
  import { MatSnackBarModule } from '@angular/material/snack-bar';
  import { MatSortModule } from '@angular/material/sort';
  import { MatTableModule } from '@angular/material/table';
  import { MatTabsModule } from '@angular/material/tabs';
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatTooltipModule } from '@angular/material/tooltip';
  import { MatTreeModule } from '@angular/material/tree';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeocercaGoogleComponent } from './geocerca-google/geocerca-google.component';

import { AgmCoreModule } from '@agm/core';


import { MenuComponent } from './menu/menu.component';
import { ListaTioComponent } from './tio/lista-tio.component';
import { NuevoTioComponent } from './tio/nuevo-tio.component';
import { DetalleTioComponent } from './tio/detalle-tio.component';
import { ActualizarTioComponent } from './tio/actualizar-tio.component';
import { LoginUsuariosComponent } from './tio/login-usuarios/login-usuarios.component';
import { RegistrarUsuariosComponent } from './tio/registrar-usuarios/registrar-usuarios.component';
import { TokenJavaComponent } from './accederwebtoken/tokenjava/tokenjava.component';

import { TokenizedInterceptorProviders } from "src/app/services/tokenized.interceptor.service";
import { ContadorAutomaticoComponent } from './contador-automatico/contador-automatico.component';

import { NumeroDirective } from 'src/app/commons/validators/numero.directive';

@NgModule({
  declarations: [
    NumeroDirective,
    TokenJavaComponent,
    AppComponent,
    AddTaskComponent,
    ViejaComponent,
    ListTasksComponent,
    TodoTasksComponent,
    GeocercaGoogleComponent,
    MenuComponent,
    ListaTioComponent,
    NuevoTioComponent,
    DetalleTioComponent,
    LoginUsuariosComponent,
    ActualizarTioComponent,
    RegistrarUsuariosComponent,
    BlockChainComponent,
    ContadorAutomaticoComponent
  ],
  imports: [
    
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w'
    }),
    /* StoreModule.forRoot({
      tasks: taskReducer,
      users: userReducer,
      login: loginReducer
    }), */
    StoreModule.forRoot({
      tasks: taskReducer,
      users: userReducer,
      login: loginReducer
    }, { 
      metaReducers: [storageSyncMetaReducer] 
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule, 
    MatFormFieldModule
  ],
  providers: [
    TokenizedInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
