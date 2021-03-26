import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViejaComponent } from './juegos/vieja/vieja.component';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';
import { GeocercaGoogleComponent } from './geocerca-google/geocerca-google.component';


import { ListaTioComponent } from './tio/lista-tio.component';
import { DetalleTioComponent } from './tio/detalle-tio.component';
import { NuevoTioComponent } from './tio/nuevo-tio.component';
import { ActualizarTioComponent } from './tio/actualizar-tio.component';
import { LoginUsuariosComponent } from './tio/login-usuarios/login-usuarios.component';

import { Tio } from './models/tio'

var usuario: Tio = {
  id: 1,
  nombre: "error",
  password: "123456",
  email: "error@gmail.com"
}

if(localStorage.getItem('login')){
  usuario = JSON.parse(localStorage.getItem('login'))
  //console.log('login')
  //console.log(localStorage.getItem('login'))
}

const routes: Routes = [
  { path: '',  redirectTo: '/geocerca', pathMatch: 'full' },
  {
    path: 'login' , component: LoginUsuariosComponent
  },
  {
    path: 'vieja' , component: ViejaComponent
  },
  {
    path: 'tasks' , component: TodoTasksComponent
  },
  {
    path: 'geocerca' , component: GeocercaGoogleComponent
  },
  {path: 'lista', component: ListaTioComponent},
  {path: 'detalle/:id', component: DetalleTioComponent},
  {path: 'nuevo', component: NuevoTioComponent},
  {path: 'actualizar/:id', component: ActualizarTioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
