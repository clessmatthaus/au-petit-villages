import { Injectable } from '@angular/core';
import { Product} from '../models/product';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = []

  private urlApi:string = "http://localhost/assets/api/products.json"

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    
    return this.http.get<Product[]>(this.urlApi)
  }

  /*getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject)=>{
      if(this.products.length){
         resolve(this.products)
      }else{
         reject([])
      }
    })

  }*/
  addProduct(product: Product){

  }
  editProduct(_id: string, product: Product){

  }
  deleteroduct(_id: string){

  }

}