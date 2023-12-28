import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private http: HttpClient) { }

  // get method
  getproduct(){
    return this.http.get("http://localhost/assets/api/productsAll.json").pipe(map((res:any)=>{
      return res;
    }))
  }
}
