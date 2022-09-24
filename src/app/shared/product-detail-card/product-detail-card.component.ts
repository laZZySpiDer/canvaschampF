import { Component, Input, OnInit } from '@angular/core';
import { ProductCardData, ProductDetailCardData } from '../shared-component.model';

@Component({
  selector: 'app-product-detail-card',
  templateUrl: './product-detail-card.component.html',
  styleUrls: ['./product-detail-card.component.scss']
})
export class ProductDetailCardComponent implements OnInit {
  @Input('productDetailCardData') productDetailCardData!: ProductDetailCardData;

  imageExtension = 'jpg';

  constructor() { }

  ngOnInit(): void {
    const imageNameArray = this.productDetailCardData.imageName.split('.');
    this.imageExtension = imageNameArray[imageNameArray.length - 1];
  }

}
