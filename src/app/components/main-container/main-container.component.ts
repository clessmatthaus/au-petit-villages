import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  products: Product[] = []
  public searchTerm: string = '';
  

  constructor(private productService: ProductService) { }
  

  ngOnInit(): void {
    window.scrollTo(0,0)
  }
search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.productService.search.next(this.searchTerm);
}
}
