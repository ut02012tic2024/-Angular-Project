import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductComponent, CommonModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentCart: any[] = [];
  totalAmount: number = 0;
  receiveProduct(item: any) {
    const isAdded = this.currentCart.some((product: any) => product.id === item.id);
    if (isAdded) {
      window.alert("product is already added")
    } else {
      item.numberOfItems = 1;
      this.currentCart.push(item);
      this.totalAmount = this.getTotal()
    }
    
  }

  addCount(product: any) {
    product.numberOfItems++;
    this.totalAmount = this.getTotal()
  }
  reduceCount(product: any) {
    product.numberOfItems--; 
    this.totalAmount = this.getTotal()
  }
  removeItem(product: any) {
    let delIndex = this.currentCart.indexOf(product);
    this.currentCart.splice(delIndex, 1);
    this.totalAmount = this.getTotal()
  }
  getTotal() {
    this.totalAmount = 0;
    this.currentCart.forEach(cartItem => {
      this.totalAmount = this.totalAmount + (cartItem.price * cartItem.numberOfItems)
    });
    return this.totalAmount;
  }
}
