import { Injectable } from '@angular/core';
import { cart } from '../models/cart';
import { Articles } from '../models/article';
import { cartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart: cart = new cart();
addToCart(article:Articles):void{
let cartArticle = this.cart.items.find(item => item.article.id == article.id)
if(cartArticle){
  this.changeQuantity(article.id, cartArticle.quantity+1)
  return;
}
this.cart.items.push(new cartItem(article));
}
removeFromCart(articleId:number):void{
  this.cart.items = this.cart.items.filter(item => item.article.id !=articleId)
}
changeQuantity(quantity:number, articleId:number){
  let cartArticle = this.cart.items.find(item=> item.article.id === articleId);
  if(!cartArticle) return;
  cartArticle.quantity = quantity;
}
getCart():cart{
  return this.cart;
}
}
