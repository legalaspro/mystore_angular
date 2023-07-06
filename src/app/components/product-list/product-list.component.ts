import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:Product[] = [];

  constructor(private httpService:HttpService) {}

  ngOnInit():void {
    this.httpService.getProducts().subscribe(res => {
      this.products = res;
    })
  }
}
