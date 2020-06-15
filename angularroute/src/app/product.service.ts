import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = "api/";

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get(this.API_URL + 'products')
  }

  getProduct(productId) {
    return this.httpClient.get(`${this.API_URL + 'products'}/${productId}`)
  }
}