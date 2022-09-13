import { Component, OnInit } from '@angular/core';
import { ProductCardData } from 'src/app/shared';

@Component({
  selector: 'app-wall-display',
  templateUrl: './wall-display.component.html',
  styleUrls: ['./wall-display.component.scss']
})
export class WallDisplayComponent implements OnInit {
  // product details input 
  title = 'CANVAS WALL DISPLAYS';
  rating = '4/5 out of 124232 reviews';
  discount = '82% ALREADY DISCOUNTED + ADDITIONAL 10% OFF';
  coupon = 'WALL10 | Ends soon';
  productStrikePrice = '$184.56';
  productCPrice = '$33.22';
  discoutPercentage = '82% OFF';
  starCount = 4;
  imageName = '1.jpg';


  // product card details
  productCardData :ProductCardData[] = [
    {
      title: '3 Panel Displays',
      imageName: '1.jpg',
      dimension: '24"x18"',
      strikePrice: '$183.57',
      cprice: '$33.33',
      varietyList: ['12"x18" Thin wrap (Canvas Lite)', '10"x8" Thin wrap (Canvas Lite)'],
    },
    {
      title: '3 Panel Displays',
      imageName: '4.jpg',
      dimension: '24"x18"',
      strikePrice: '$183.57',
      cprice: '$33.33',
      varietyList: ['12"x18" Thin wrap (Canvas Lite)', '10"x8" Thin wrap (Canvas Lite)'],
    },
    {
      title: '3 Panel Displays',
      imageName: '3.jpg',
      dimension: '24"x18"',
      strikePrice: '$183.57',
      cprice: '$33.33',
      varietyList: ['12"x18" Thin wrap (Canvas Lite)', '10"x8" Thin wrap (Canvas Lite)'],
    },
    {
      title: '3 Panel Displays',
      imageName: '2.jpg',
      dimension: '24"x18"',
      strikePrice: '$183.57',
      cprice: '$33.33',
      varietyList: ['12"x18" Thin wrap (Canvas Lite)', '10"x8" Thin wrap (Canvas Lite)'],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
