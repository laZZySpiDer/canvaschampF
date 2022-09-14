import { Component, OnInit } from '@angular/core';
import { Alignment, ProductDetailCardData } from 'src/app/shared';

@Component({
  selector: 'app-pop-art',
  templateUrl: './pop-art.component.html',
  styleUrls: ['./pop-art.component.scss']
})
export class PopArtComponent implements OnInit {
  // product details input 
  title = 'POP ART CANVAS';
  rating = '4.7/5 out of 185352 reviews';
  productDescription = 'Offer different styles in our POP ART Canvas Prints';
  discount = 'FLAT 20% OFF ON POP ART CANVAS PRINTS!';
  coupon = 'POP20';
  productCPrice = '$14.19';
  starCount = 4.7;
  imageName = '1.jpg';

  productCardData: ProductDetailCardData[] = [
    {
      title: 'Spectacular Showpiece: Pop Art on Canvas',
      imageName: '3.jpg',
      description: 'With vibrant colors and recognizable imagery, pop art on canvas creates unique modern works of art from your photos. CanvasChamp’s personalized canvas printing takes influences from Warhol, Lichtenstein, Glo-Portrait or caricature elements to craft a striking centerpiece for any setting.',
      buttonName: 'START ORDER',
      alignment: Alignment.LEFT
    }];

  stunningCollage: ProductDetailCardData[] = [
    {
      title: 'Caricature',
      imageName: '1.jpg',
      description: 'Pop art portraits highlighting distinctive features',
      alignment: Alignment.CENTER,
    },
    {
      title: 'Pixel Painting',
      imageName: '2.jpg',
      description: 'Digital oil painting features brush stroke detailing',
      alignment: Alignment.CENTER,
    }, {
      title: 'Andy Warhol',
      imageName: '3.jpg',
      description: 'Classic comic-style pop art canvas print',
      alignment: Alignment.CENTER,
    }, {
      title: 'Lichtenstein',
      imageName: '4.jpg',
      description: 'Digital oil painting features brush stroke detailing',
      alignment: Alignment.CENTER,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
