import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.productList.asObservable
  }
  addtoCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    /*this.getTotalPrice();*/
  }
  setProduct(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
 
  getTotalPrice(){
    let sommeTotal = 0;
    this.cartItemList.map((i:any)=>{
      sommeTotal += i.total;
    })
  }
  removeCartItem(product: any){
    this.cartItemList.map((i:any, index:any)=>{
      if(product.id===i.id){
        this.cartItemList.splice(index, 1);
      }
    })
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
