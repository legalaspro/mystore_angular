import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems:CartItem[] = [];
  private totalPriceSubject:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  constructor() { }

  addToCart(product:Product, quantity: number):void {
    let item = this.cartItems.find(item => item.product.id === product.id);
    if(item) {
      // If item already exists in the cart, just update the quantity.
      item.quantity = quantity;
    } else {
      // If item doesn't exist in the cart, add a new CartItem.
      this.cartItems.push(new CartItem(product, quantity));
    }
    this.recalculateTotal();
  }

  updateCartItemQuantity(product: Product, quantity: number) {
    const foundCartItem = this.cartItems.find(item => item.product.id === product.id);
    if (foundCartItem) {
      foundCartItem.quantity = quantity;
      if (quantity === 0) {
        this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
      }
      this.recalculateTotal();
    }
  }

  getCartItems():CartItem[] {
    return this.cartItems;
  }

  getTotalPrice$() {
    return  this.totalPriceSubject.asObservable();
  }

  private recalculateTotal() {
    let newTotal = 0;
    for (let item of this.cartItems) {
      newTotal += item.product.price * item.quantity;
    }
    this.totalPriceSubject.next(newTotal);
  }
}
