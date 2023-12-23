import { Component,  Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined
  @Output() displayProductPage: EventEmitter<Product> = new EventEmitter<Product>()
  
  constructor() { }

  ngOnInit(): void {
  }
  getNumber(): number{
    return 3
  }
  handleClickProduct(product: Product | undefined){
    this.displayProductPage.emit(product)
  }

}
