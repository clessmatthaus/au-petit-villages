import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier-vide',
  templateUrl: './panier-vide.component.html',
  styleUrls: ['./panier-vide.component.css']
})
export class PanierVideComponent implements OnInit {
  @Input() visible:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
