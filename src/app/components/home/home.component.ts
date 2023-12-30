import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services2/images.service';
import { Articles } from 'src/app/models/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles:Articles[]= [];

  constructor(private ps:ImagesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  this.route.params.subscribe(params =>{
    if(params['searchItem'])
    this.articles = this.ps.getAll().filter(article=> article.name.toLowerCase().includes(params['searchItem'].toLowerCase()) )
    else
    this.articles = this.ps.getAll(); 
  })
  }
  sort(order:any){

    if(order == 'asc'){
      this.articles.sort(
        (p1, p2)=> {return p1.sold_price > p2.sold_price ? 1 : -1})
    }
    else{
      this.articles.sort(
        (p1, p2)=> {return p1.sold_price < p2.sold_price ? 1 : -1})
    }
  }
}
