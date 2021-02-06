import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViejaComponent } from './juegos/vieja/vieja.component';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';
const routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    {
        path: 'vieja', component: ViejaComponent
    },
    {
        path: 'tasks', component: TodoTasksComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map