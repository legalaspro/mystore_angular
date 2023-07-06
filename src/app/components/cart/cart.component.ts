import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems:CartItem[] = [];
  totalPrice$: Observable<number>;
  fullName: string = '';
  address: string = '';
  creditCard: string = '';



  constructor(
    private router:Router,
    private cartService:CartService) {
    this.totalPrice$ = this.cartService.getTotalPrice$();
  }

  ngOnInit():void {
    this.cartItems = this.cartService.getCartItems();
  }

  hideCartItem(cartItem:CartItem): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== cartItem.product.id);
  }

  onSubmit():void {
    this.totalPrice$.pipe(take(1)).subscribe(totalPrice => {
      let formData = {
        fullName: this.fullName,
        address: this.address,
        totalPrice: totalPrice
      };

      this.router.navigate(['/confirmation'], { state: formData });
    });
  }
}
