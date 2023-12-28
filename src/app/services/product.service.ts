import { Injectable } from '@angular/core';
import { Product} from '../models/product';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, catchError, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = []
  public search = new BehaviorSubject<string>("");

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
  /*searchProduct(name: string): Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost/assets/api/products.json/?name=${name}`).pipe(
        tap((response)=> console.log(response)),
    );
  }*/
  /*addProduct(product: Product){
  this.products.push(product);
  }*/
  editProduct(_id: string, product: Product){

  }
  deleteroduct(_id: string){

  }

}