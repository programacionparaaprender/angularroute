import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
//import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
//import { DataService } from "./data.service";
import { ProductService } from "./product.service";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ViejaComponent } from './juegos/vieja/vieja.component';

import { StoreModule } from '@ngrx/store'
import { miReducer } from './reducers/app.reducer';
import { ReducersComponentComponent } from './reducers-component/reducers-component.component';
import { storageSyncMetaReducer } from 'ngrx-store-persist';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ViejaComponent,
    ReducersComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    /* StoreModule.forRoot({
      mensaje: miReducer
    }) */
    StoreModule.forRoot({mensaje: miReducer}, { metaReducers: [storageSyncMetaReducer] }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
