import { Component, OnInit } from '@angular/core';
import { Alignment, ProductCardData, ProductDetailCardData } from 'src/app/shared';

@Component({
  selector: 'app-photo-collage',
  templateUrl: './photo-collage.component.html',
  styleUrls: ['./photo-collage.component.scss']
})
export class PhotoCollageComponent implements OnInit {
  // product details input 
  title = 'CANVAS PHOTO COLLAGE';
  rating = '4.7/5 out of 185352 reviews';
  discount = '87% OFF ON COLLAGE CANVAS PRINTS | PROMO APPLIED!';
  productDescription = 'Make this yourself to relive your memories or gift someone a unique canvas filled with their memories. When just one photo is not enough, Go for our Photo Collage Canvas Prints and make that perfect Canvas for your walls or as a Gift.';
  coupon = '$10 Off On Order Over $99 | USE CODE: COLLAGE10';
  productStrikePrice = '$48.46';
  productCPrice = '$6.30';
  discoutPercentage = '87% OFF';
  starCount = 4.7;
  imageName = '3.jpg';


  stunningCollage: ProductDetailCardData[] = [
    {
      title: 'Canvas Photo Collage',
      imageName: '1.jpg',
      description: 'One photo, multiple canvases, a view unlike any other.',
      alignment: Alignment.CENTER,
      buttonName: 'GET STARTED'
    },
    {
      title: 'Canvas Wall Display',
      imageName: '2.jpg',
      description: 'Multiple photos, multiple canvases, one fantastic wall art display.',
      alignment: Alignment.CENTER,
      buttonName: 'GET STARTED'
    },
  ];

  qualityCollage: ProductDetailCardData[] = [
    {
      title: 'Framing Options',
      imageName: '1.jpg',
      description: 'We provide you with the option of choosing from 0.5, 0.75 and 1.5 depths in canvas wrap. A high quality wooden frame can be added to give an additional unique touch to your overall canvas.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Design Control',
      imageName: '2.jpg',
      description: 'We offer you great control over the kind of design that you want in your canvas photo collage. You can even control the amount of space in between the pictures and choose from a white or black background.',
      alignment: Alignment.CENTER
    }, {
      title: 'Amazingly Packaged',
      imageName: '3.jpg',
      description: 'We will make sure that we carefully pack your art so that you receive it in the most perfect condition possible. All you need to do is pull your artwork out of its box and simply hang it on the wall of your liking.',
      alignment: Alignment.CENTER
    }, {
      title: 'Care Instructions',
      imageName: '4.jpg',
      description: 'Make sure that you wipe the collage with the help of only a soft and dry cloth on a frequent basis with usage of no cleaning products or a damp cloth on the canvas. Do not expose your canvas to direct sunlight.',
      alignment: Alignment.CENTER
    },
  ];

  productCardData: ProductCardData[] = [{
    title: '5 Square Photo Collage',
    cprice: '$6.30',
    strikePrice: '$48.46',
    buttonName: 'CREATE NOW',
    imageName: '2.jpg'
  },{
    title: '5 Square Photo Collage',
    cprice: '$6.30',
    strikePrice: '$48.46',
    buttonName: 'CREATE NOW',
    imageName: '3.jpg'
  },{
    title: '5 Square Photo Collage',
    cprice: '$6.30',
    strikePrice: '$48.46',
    buttonName: 'CREATE NOW',
    imageName: '1.jpg'
  },{
    title: '5 Square Photo Collage',
    cprice: '$6.30',
    strikePrice: '$48.46',
    buttonName: 'CREATE NOW',
    imageName: '2.jpg'
  },{
    title: '5 Square Photo Collage',
    cprice: '$6.30',
    strikePrice: '$48.46',
    buttonName: 'CREATE NOW',
    imageName: '4.jpg'
  },{
    title: '5 Square Photo Collage',
    cprice: '$6.30',
    strikePrice: '$48.46',
    buttonName: 'CREATE NOW',
    imageName: '3.jpg'
  },{
    title: '5 Square Photo Collage',
    cprice: '$6.30',
    strikePrice: '$48.46',
    buttonName: 'CREATE NOW',
    imageName: '2.jpg'
  },{
    title: '5 Square Photo Collage',
    cprice: '$6.30',
    strikePrice: '$48.46',
    buttonName: 'CREATE NOW',
    imageName: '1.jpg'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
