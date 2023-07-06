import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private productsUrl:string = '/assets/data.json';


  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProduct(id:number):Observable<Product | undefined> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map((products: Product[]) => products.find((product: Product) => product.id === id))
    );
  }
}
