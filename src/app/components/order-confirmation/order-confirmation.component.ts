import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
    fullName: string | undefined;
    address: string | undefined;
    totalPrice: number | undefined;

    constructor(private router:Router) {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras.state as {
        fullName: string,
        address: string,
        totalPrice: number
      };
  
      if (state) {
        this.fullName = state.fullName;
        this.address = state.address;
        this.totalPrice = state.totalPrice;
      } else {
        this.router.navigate(['/cart']);
      }
    }
}
