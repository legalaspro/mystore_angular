import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem!:CartItem;
  @Output() hideCartItem:EventEmitter<CartItem> = new EventEmitter;

  constructor(private cartService:CartService) {}

  updateQuantity():void {
    this.cartService.updateCartItemQuantity(this.cartItem.product, this.cartItem.quantity);
    if(this.cartItem.quantity == 0) {
      alert('Removed from cart!');
      this.hideCartItem.emit(this.cartItem);
    }
  }
}
