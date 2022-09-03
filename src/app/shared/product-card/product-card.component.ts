import { Component, Input, OnInit } from '@angular/core';
import { ProductCardData } from '../shared-component.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('productCardData') productCardData!: ProductCardData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
