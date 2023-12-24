import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductService } from './../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalogue-product',
  templateUrl: './catalogue-product.component.html',
  styleUrls: ['./catalogue-product.component.css']
})
export class CatalogueProductComponent implements OnInit {

  products: Product[] = []

  isDisplayModal: boolean = false
  modalProduct: Product | undefined
  
  productSub: Subscription | undefined

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .then((products: Product[])=>{
      this.products = products
      })
      .catch(()=>{
      this.products = []
    })
  }
  getNumber(): number{
    return 3
  }
  handleDisplayProductModal(product: Product){
    if(product){
      this.isDisplayModal= true
      this.modalProduct = product
    }
  }
  handleCloseModal(){
    this.isDisplayModal= false
      this.modalProduct = undefined
  }
}
