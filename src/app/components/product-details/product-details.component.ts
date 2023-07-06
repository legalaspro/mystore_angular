import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product:Product | undefined | null = null;
  quantity:number = 1;
  loading:boolean = true;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private cartService: CartService
  ) { }

  ngOnInit():void {
    const productID = this.route.snapshot.paramMap.get('id');
    if (productID !== null) {
      this.httpService.getProduct(+(productID || 0)).subscribe(
        (product: Product|undefined) => {
          this.loading = false
          this.product = product;
        });
    }
  }

  addToCart():void {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      alert('Added to cart!');
    }
  }
}
