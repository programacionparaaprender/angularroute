import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViejaComponent } from './juegos/vieja/vieja.component';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';
import { GeocercaGoogleComponent } from './geocerca-google/geocerca-google.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
