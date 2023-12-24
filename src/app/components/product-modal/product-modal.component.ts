import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  @Input() product: Product | undefined
  @Output() close: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
   
  }
  closeModal(){
    this.close.emit()
  }

}
