import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articles } from 'src/app/models/article';
import { ImagesService } from 'src/app/services2/images.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
article!:Articles
  constructor(private activatedRoute: ActivatedRoute, private articleService: ImagesService) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.article = articleService.getArticleById(params['id'])
    })
   }

  ngOnInit(): void {
  }

}
