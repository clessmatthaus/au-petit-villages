import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navItems } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  navData: Item[] = navItems

  @Output() close: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  handleClose(){
    this.close.emit()
  }
}
