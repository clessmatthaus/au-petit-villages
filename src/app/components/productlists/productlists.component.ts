import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlists',
  templateUrl: './productlists.component.html',
  styleUrls: ['./productlists.component.css']
})
export class ProductlistsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  filteredProducts: any;
  allProducts: any;

  searchInput = ""

  ngOnInit(): void {
    this.http.get("http://localhost/assets/api/products.json").subscribe(
      (res)=>{
      //console.log(res)
      this.filteredProducts = res;
      this.allProducts = res;
    })
  }
  filterProducts(){
   this.filteredProducts = this.allProducts.filter(
    (p: { name: string; })=>{
       return p.name.toLowerCase().includes(this.allProducts.toLowerCase)
    }
   )  
}
}