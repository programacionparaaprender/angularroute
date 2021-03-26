import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // main.ts persisted
import {
  getAllDataFromLocalForage,
  default as localForage,
} from 'ngrx-store-persist';
 
getAllDataFromLocalForage({
  driver: localForage.INDEXEDDB,
  keys: [
    'user',
    'posts',
    'tasks',
    'users',
    'login'
  ],
}).then(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
});