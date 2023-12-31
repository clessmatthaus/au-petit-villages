import { Component,  EventEmitter,  Input,  OnDestroy,  OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  slug: string | undefined  
  product: Product | undefined

  productSub: Subscription |undefined

  @Output() displayProduct: EventEmitter<Product> = new EventEmitter<Product>()

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.slug = this.route.snapshot.params["slug"]
    this.productSub = this.productService.getProducts().subscribe({
     next: (products: Product[])=>{
       this.product = products.filter(p=> p.slug === this.slug)[0]
     },
     error:(error: any)=>{
       console.log("Erreur:", error);
     }
    })
   }
   ngOnDestroy(): void {
       this.productSub?.unsubscribe();
   }
   /*addProduct(product: Product){
    this.productService.addProduct(product);
    }*/
  }
  

