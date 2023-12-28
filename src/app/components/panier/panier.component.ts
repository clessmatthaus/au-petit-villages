import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit, OnDestroy {
  public articles!: any[];
  public grandtotal: number = 0;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
  this.cart.getproduct().subscribe(res =>{
    this.articles = res;
    this.grandtotal = this.cart.totalprice()
  })
  }
  emptycart(){
    this.cart.removeallcart();
  }
  delete(article: any){
    this.cart.removeallcartarticle(article)
  }
  ngOnDestroy(): void {
      
  }
 
}
