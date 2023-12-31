import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/models/cart';
import { cartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services2/cart.service';
import { ImagesService } from 'src/app/services2/images.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
 cart!: cart
  constructor(private cartService: CartService) {
   
    this.setCart();

   }

  ngOnInit(): void {
  }
setCart(){
  this.cart = this.cartService.getCart();
}
removeFromCart(cartItem: cartItem){
  this.cartService.removeFromCart(cartItem.article.id);
  this.setCart();
}
changeQuantity(cartItem: cartItem, quantityInString:string){
const quantity = parseInt(quantityInString);
this.cartService.changeQuantity(cartItem.article.id, quantity);
this.setCart();
}
}
