import { Component, OnInit } from '@angular/core';
import { navItems } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navData: Item[] = navItems
  isDisplayMobileNav: boolean = false
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.navData);
  }
  handleDisplayMobileNav(){
    /*console.log(this.isDisplayMobileNav)*/
    this.isDisplayMobileNav = !this.isDisplayMobileNav
  }
  handleCloseMobileNav(){
    this.isDisplayMobileNav = false
  }

}
