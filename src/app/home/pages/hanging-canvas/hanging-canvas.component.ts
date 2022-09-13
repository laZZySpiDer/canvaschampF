import { Component, OnInit } from '@angular/core';
import { Alignment, ProductDetailCardData } from 'src/app/shared';


@Component({
  selector: 'app-hanging-canvas',
  templateUrl: './hanging-canvas.component.html',
  styleUrls: ['./hanging-canvas.component.scss']
})
export class HangingCanvasComponent implements OnInit {
  // product details input 
  title = 'HANGING CANVAS PRINTS';
  rating = '4.4/5 out of 16430 reviews';
  productDescription = 'Bring a Simple Touch to Your Home';
  discount = 'UP TO 93% OFF ON HANGING CANVAS | PROMO APPLIED!';
  productStrikePrice = '$51.00';
  productCPrice = '$3.57';
  discoutPercentage = '93% OFF';
  starCount = 4.7;
  imageName = '1.jpg';

  productCardData: ProductDetailCardData[] = [
    {
      title: 'The Wooden Hangers',
      imageName: '3.jpg',
      description: 'Our wooden hangers are made from chipped wood and hold fast to your print with powerful rare earth magnets. A simple bit of twine (included) and a nail are all you need to beautify any place in your home or office. Our simple-but-lovely hangers bring out the beauty of your hanging prints. Choose the right color to make your wall art "pop"!',
      buttonName: 'CREATE WOODEN HANGERS',
      alignment: Alignment.LEFT
    }
  ];

  customCanvasProductData: ProductDetailCardData[] = [
    {
      title: 'Import Your Photos',
      imageName: '1.jpg',
      description: 'Import single photos or multiple photos for hanging canvas wall art Choose Your Design and canvas size',
      alignment: Alignment.CENTER
    },
    {
      title: 'Customize Your Canvas Art',
      imageName: '2.jpg',
      description: 'Create your hanging canvas art in our online design tool. With just a few clicks, we will deliver your canvas prints right away!',
      alignment: Alignment.CENTER
    },
    {
      title: 'Hang Your Canvas Art!',
      imageName: '3.jpg',
      description: 'You supply the nail, we supply the lovely hanging canvas wall art! There’s no easier way to accent your walls with lovely art and lovely memories.',
      alignment: Alignment.CENTER
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
