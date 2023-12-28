import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/newservices/productlist.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public productlist: any;

  constructor(private api: ProductlistService, private cart: CartService) { }

  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
      //console.log(res);
      this.productlist = res;
      this.productlist.forEach((i:any)=>{
        Object.assign(i, {quantity:1,total:i.sold_price})
      });
    });
  }
//add to cart
addtocart(article: any){
this.cart.addtocart(article);
}
//total price 

}
