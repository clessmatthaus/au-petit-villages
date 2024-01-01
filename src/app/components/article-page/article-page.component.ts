import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from 'src/app/models/article';
import { CartService } from 'src/app/services2/cart.service';
import { ImagesService } from 'src/app/services2/images.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
article!:Articles
  constructor(private activatedRoute: ActivatedRoute, private articleService: ImagesService, 
    private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.article = articleService.getArticleById(params['id'])
    })
   }

ngOnInit(): void {
    window.scrollTo(0,0)
}
addToCart(){
  this.cartService.addToCart(this.article);
  this.router.navigateByUrl('/cart-page')
}
}
