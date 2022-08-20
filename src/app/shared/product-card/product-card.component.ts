import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('title') title = '';
  @Input('dimension') dimension = '';
  @Input('strikePrice') strikePrice = '';
  @Input('cprice') cprice = '';
  @Input('varietyList') varietyList: string[] = [];
  @Input('imageName') imageName = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
