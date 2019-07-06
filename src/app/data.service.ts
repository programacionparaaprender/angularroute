import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{
  constructor() { }
  createDb(){

    let  products =  [
      {  id:  1,  name:  'Product 1' },
      {  id:  2,  name:  'Product 2' },
      {  id:  3,  name:  'Product 3' },
      {  id:  4,  name:  'Product 4' },
      {  id:  5,  name:  'Product 5' }      
    ];

    return { products };

   }
}