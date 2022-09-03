import { Component, Input, OnInit } from '@angular/core';
import { ProductCardData, ProductDetailCardData } from '../shared-component.model';

@Component({
  selector: 'app-product-detail-card',
  templateUrl: './product-detail-card.component.html',
  styleUrls: ['./product-detail-card.component.scss']
})
export class ProductDetailCardComponent implements OnInit {
  @Input('productDetailCardData') productDetailCardData!: ProductDetailCardData;

  constructor() { }

  ngOnInit(): void {
  }

}
