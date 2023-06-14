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

import { RegistrarUsuariosComponent } from './tio/registrar-usuarios/registrar-usuarios.component';


import { BlockChainComponent } from './blockchain/blockchain.component';

import { Tio } from './models/tio'
import { TokenJavaComponent } from './accederwebtoken/tokenjava/tokenjava.component';

import { ContadorAutomaticoComponent } from './contador-automatico/contador-automatico.component';
import { QuarkusComponent } from './quarkus/quarkus.component';
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
  { path: '',  redirectTo: '/contador', pathMatch: 'full' },
  {path: 'quarkus' , component: QuarkusComponent},
  {path: 'tokenjava' , component: TokenJavaComponent},
  {path: 'blockchain' , component: BlockChainComponent},
  {path: 'blockchain' , component: BlockChainComponent},
  {path: 'login' , component: LoginUsuariosComponent},
  {path: 'registro' , component: RegistrarUsuariosComponent},
  {path: 'contador' , component: ContadorAutomaticoComponent},
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
