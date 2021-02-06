import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './store/tasks.reducer';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component';
import { ViejaComponent } from './juegos/vieja/vieja.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';
import { HttpClientModule } from '@angular/common/http';
/* import {
  MatToolbarModule,
  //MatIconModule,
  //MatSidenavModule,
  //MatListModule,
  //MatButtonModule
} from  '@angular/material'; */
localStorage.setItem('URL', 'https://localhost:44382/');
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            AddTaskComponent,
            ViejaComponent,
            ListTasksComponent,
            TodoTasksComponent
        ],
        imports: [
            StoreDevtoolsModule.instrument({
                maxAge: 25,
                logOnly: environment.production,
            }),
            FormsModule,
            ReactiveFormsModule,
            BrowserModule,
            StoreModule.forRoot({ tasks: taskReducer }),
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
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map