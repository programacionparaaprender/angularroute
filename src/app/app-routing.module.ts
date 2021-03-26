import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViejaComponent } from './juegos/vieja/vieja.component';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';
import { GeocercaGoogleComponent } from './geocerca-google/geocerca-google.component';


import { ListaTioComponent } from './tio/lista-tio.component';
import { DetalleTioComponent } from './tio/detalle-tio.component';
import { NuevoTioComponent } from './tio/nuevo-tio.component';
import { ActualizarTioComponent } from './tio/actualizar-tio.component';


const routes: Routes = [
  { path: '',  redirectTo: '/geocerca', pathMatch: 'full' },
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
