import { Component, OnInit } from '@angular/core';
import { Alignment, ProductDetailCardData } from 'src/app/shared';

@Component({
  selector: 'app-canvas-prints',
  templateUrl: './canvas-prints.component.html',
  styleUrls: ['./canvas-prints.component.scss']
})
export class CanvasPrintsComponent implements OnInit {
  // product details input 
  title = 'CANVAS PRINTS';
  rating = '4.4/5 out of 16430 reviews';
  discount = 'UP TO 93% OFF CANVAS PRINTS | PROMO APPLIED!';
  coupon = 'Buy 2 Get 1 Free CODE: B2G1';
  productStrikePrice = '';
  productCPrice = '$4.20';
  starCount = 4.7;
  imageName = '2.jpg';
  productDescriptionList = ['Museum Quality Canvas Prints',
    'Over 6 Million Canvas Shipped',
    '100% Satisfaction Guarantee',
    '100% Refund or Free Replacement',
    '365-Day Warranty',
    'Over 10 Years Experience'];


  // product card details
  productCardData: ProductDetailCardData[] = [
    {
      title: 'Thick Wooden Frame (1.5”)',
      imageName: '3.jpg',
      description: 'For a gallery-like effect, choose a 1.5” wooden frame to increase the durability of your canvas. Printing your canvas in a large format gives your work more expressive depth and stability. In addition, your wall decoration can be made easier to hang with the pine frame.',
      buttonName: 'CREATE YOUR CANVAS',
      alignment: Alignment.LEFT
    },
    {
      title: 'Thick Wooden Frame (1.5”)',
      imageName: '4.jpg',
      description: 'For a gallery-like effect, choose a 1.5” wooden frame to increase the durability of your canvas. Printing your canvas in a large format gives your work more expressive depth and stability. In addition, your wall decoration can be made easier to hang with the pine frame.',
      buttonName: 'CREATE YOUR CANVAS',
      alignment: Alignment.LEFT
    },
    {
      title: 'Thick Wooden Frame (1.5”)',
      imageName: '2.jpg',
      description: 'For a gallery-like effect, choose a 1.5” wooden frame to increase the durability of your canvas. Printing your canvas in a large format gives your work more expressive depth and stability. In addition, your wall decoration can be made easier to hang with the pine frame.',
      buttonName: 'CREATE YOUR CANVAS',
      alignment: Alignment.LEFT
    }
  ];

  customCanvasProductData: ProductDetailCardData[] = [
    {
      title: 'Canvas Photo Collage',
      imageName: '1.jpg',
      description: 'One photo, multiple canvases, a view unlike any other.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Canvas Wall Display',
      imageName: '2.jpg',
      description: 'Multiple photos, multiple canvases, one fantastic wall art display.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Split Photo Canvas',
      imageName: '3.jpg',
      description: 'Find your memories picturesque on the wall as a journey in a canvas photo collage.',
      alignment: Alignment.CENTER
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
