import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductService } from './../../services/product.service';
import { Subscription } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-catalogue-product',
  templateUrl: './catalogue-product.component.html',
  styleUrls: ['./catalogue-product.component.css']
})
export class CatalogueProductComponent implements OnInit, OnDestroy {

  products: Product[] = []

  searchKey:string = "";

  isDisplayModal: boolean = false
  modalProduct: Product | undefined
  productSub: Subscription | undefined
  
  constructor(private productService: ProductService, private cart: CartService) { }

  ngOnInit(): void {
    this.productSub = this.productService.getProducts().subscribe({
      next: (products: Product[])=>{
        this.products = products
      },
      error: (error: any)=>{
        console.log("Erreur : ", error);
      },
      complete: ()=>{
        console.log("chargement de données terminée");
      },
    });
    this.productService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })

    }
  ngOnDestroy(): void {
      this.productSub?.unsubscribe()
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
