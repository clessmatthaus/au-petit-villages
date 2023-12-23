import { ProductService } from './../../services/product.service';
import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,  OnDestroy {

  slug: string | undefined
  productSub: Subscription | undefined

  @Input() product: Product | undefined
  constructor(private route: ActivatedRoute, 
    private productService: ProductService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.productSub?.unsubscribe()
  }
}
