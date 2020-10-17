import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViejaComponent } from './juegos/vieja/vieja.component';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';
const routes: Routes = [
  { path: '',  redirectTo: '/tasks', pathMatch: 'full' },
  {
    path: 'vieja' , component: ViejaComponent
  },
  {
    path: 'tasks' , component: TodoTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
