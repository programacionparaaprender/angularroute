import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { HomeComponents } from "../../../../../../../Users/LuisCorrea/Documents/htdocs/angularroute2/src/app/home/home.component";
const routes: Routes = [
   {
    path: 'home',
    component: HomeComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
