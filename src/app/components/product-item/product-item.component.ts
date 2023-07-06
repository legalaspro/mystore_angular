import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  selectedQuantity: number = 1;

  constructor(private cartService:CartService){}

  addToCart():void {
    this.cartService.addToCart(this.product, this.selectedQuantity);
    alert('Added to cart!');
  }
}
