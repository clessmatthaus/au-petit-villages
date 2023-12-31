import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../models/Tag';
import { ImagesService } from '../services2/images.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  articlePageTags?:string[];
  tags?:Tag[] = [];
  constructor(private ps: ImagesService) { }

  ngOnInit(): void {
    if(!this.articlePageTags)
    this.tags = this.ps.getAllTag();
  }

}
