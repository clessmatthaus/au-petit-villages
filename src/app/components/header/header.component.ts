import { Component, OnInit } from '@angular/core';
import { navItems } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem = 0
  navData: Item[] = navItems
  isDisplayMobileNav: boolean = false
  
  constructor(private productService: ProductService, private cart: CartService) { }

  ngOnInit(): void {
  /*this.cart.getProducts().subscribe(res=>{
    this.totalItem = res.length;
  })*/
  }
  handleDisplayMobileNav(){
    /*console.log(this.isDisplayMobileNav)*/
    this.isDisplayMobileNav = !this.isDisplayMobileNav
  }
  handleCloseMobileNav(){
    this.isDisplayMobileNav = false
  }

}
