import { Component, OnInit } from '@angular/core';
import { ProductCardData } from 'src/app/shared';

@Component({
  selector: 'app-split-photo',
  templateUrl: './split-photo.component.html',
  styleUrls: ['./split-photo.component.scss']
})
export class SplitPhotoComponent implements OnInit {
  // product details input 
  title = 'SPLIT CANVAS PRINTS';
  rating = '4.4/5 out of 16430 reviews';
  productDescriptionList = 'Transform your wall into splendid creative display by printing your favorite pictures across multi panel split canvas prints';
  discount = 'UP TO 10% OFF CANVAS PRINTS | PROMO APPLIED!';
  coupon = 'SPLIT10';
  productStrikePrice = '';
  productCPrice = '$7.98';
  discoutPercentage = '82% OFF';
  starCount = 4.7;
  imageName = '2.jpg';

  productCardData: ProductCardData[] = [
    {
      title: '2 Panel Split Canvas Prints',
      imageName: '1.jpg',
      cprice: '$7.98',
      buttonName: 'START ORDER'
    },
    {
      title: '3 Panel Split Canvas Prints',
      imageName: '4.jpg',
      cprice: '$42.72',
      buttonName: 'START ORDER'
    },
    {
      title: '4 Panel Split Canvas Prints',
      imageName: '3.jpg',
      cprice: ' $47.46',
      buttonName: 'START ORDER'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
