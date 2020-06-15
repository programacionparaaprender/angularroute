import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ViejaComponent } from './juegos/vieja/vieja.component';

//import { HomeComponents } from "../../../../../../../Users/LuisCorrea/Documents/htdocs/angularroute2/src/app/home/home.component";
const routes: Routes = [
  { path: '',  redirectTo: '/vieja', pathMatch: 'full' },
  /* { path: '',  redirectTo: '/products', pathMatch: 'full' }, */
  {path: 'products' , component: ProductListComponent},
  {path: 'product/:id' , component: ProductDetailComponent},
  
   {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'vieja' , component: ViejaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
