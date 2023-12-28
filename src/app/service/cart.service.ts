import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitemlist: any = []
  public productlist = new BehaviorSubject<any>([]);
  

  constructor() { }
  getproduct(){
    return this.productlist.asObservable();
  }
  //add to cart
  addtocart(product: any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
    this.totalprice()
  }
  //total price
  totalprice():number{
    let grandtotal = 0;
    this.cartitemlist.map((i:any)=>{
      grandtotal += i.total;
      //console.log(grandtotal);
    })
    return grandtotal;
  }
  removeallcart(){
    this.cartitemlist=[]
    this.productlist.next(this.cartitemlist);
  }  
  removeallcartarticle(article: any){
    this.cartitemlist.map((i:any, index:any)=>{
      if(article.id === i.id)
      this.cartitemlist.splice(index, 1)
    })
    this.productlist.next(this.cartitemlist);
  }
}
