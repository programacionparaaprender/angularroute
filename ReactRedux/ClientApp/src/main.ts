import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { NgModule } from '@angular/core';
import {
  getAllDataFromLocalForage,
  default as localForage,
} from 'ngrx-store-persist';

if (environment.production) {
  enableProdMode();
}

/* platformBrowserDynamic()
.bootstrapModule(AppModule)
  .catch(err => console.error(err)); */

getAllDataFromLocalForage({
  driver: localForage.INDEXEDDB,
  keys: [
    'user',
    'posts',
    'mensaje'
  ],
}).then(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
});