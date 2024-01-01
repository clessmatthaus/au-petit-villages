import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-article',
  templateUrl: './not-article.component.html',
  styleUrls: ['./not-article.component.css']
})
export class NotArticleComponent implements OnInit {
  @Input() visible:boolean = false;
  @Input() notFoundMessage: string = "Rien n'a été trouvé!";
  @Input() resetLinkText:string = "Réinitialiser";
  @Input() resetLinkRoute:string = "/";

  constructor() { }

  ngOnInit(): void {
  }

}
