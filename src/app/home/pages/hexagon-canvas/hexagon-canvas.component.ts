import { Component, OnInit } from '@angular/core';
import { Alignment, ProductDetailCardData } from 'src/app/shared';

@Component({
  selector: 'app-hexagon-canvas',
  templateUrl: './hexagon-canvas.component.html',
  styleUrls: ['./hexagon-canvas.component.scss']
})
export class HexagonCanvasComponent implements OnInit {
  // product details input 
  title = 'HEXAGON PRINTS';
  rating = '4.4/5 out of 16430 reviews';
  productDescription = 'A Fun New Way to Preserve Your Memories!'
  discount = '60% OFF ON HEXAGON PHOTO CANVAS | PROMO APPLIED!';
  coupon = 'Extra 10% off On Orders Over $99! | CODE: CAN10';
  productStrikePrice = '$47.48';
  productCPrice = '$18.99';
  discoutPercentage = '60% OFF';
  starCount = 4.7;
  imageName = '3.jpg';


  // product card details
  productCardData: ProductDetailCardData[] = [
    {
      title: 'Vertical Hexagonal Prints Bundle of 3',
      imageName: '3.jpg',
      buttonName: 'START ORDER',
      alignment: Alignment.CENTER
    },
    {
      title: 'Horizontal Hexagonal Prints Bundle of 3',
      imageName: '4.jpg',
      buttonName: 'START ORDER',
      alignment: Alignment.CENTER
    },
    {
      title: 'Horizontal Hexagonal Prints Bundle of 3',
      imageName: '2.jpg',
      buttonName: 'START ORDER',
      alignment: Alignment.CENTER
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
