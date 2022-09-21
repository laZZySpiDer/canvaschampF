import { Component, OnInit } from '@angular/core';
import { Alignment, ProductDetailCardData } from 'src/app/shared';

@Component({
  selector: 'app-wood-prints',
  templateUrl: './wood-prints.component.html',
  styleUrls: ['./wood-prints.component.scss']
})
export class WoodPrintsComponent implements OnInit {
  title = 'WOOD PRINTS';
  rating = '4.7/5 out of 185499 reviews';
  productDescription = 'Wood printing is simply photos printed on a wooden plaque. The picture provided is directly printed onto the wood surface resulting in a more luxurious and vibrant photo.';
  discount = '65% OFF WOOD PHOTO PRINTS | PROMO APPLIED!';
  productStrikePrice = '$41.40';
  productCPrice = '$14.49';
  starCount = 4.7;
  imageName = '1.jpg';

  // product card details
  productCardData: ProductDetailCardData[] = [
    {
      title: '8" x 8" Wood Print',
      imageName: 'wood_prints_1.jpg',
      alignment: Alignment.CENTER
    },
    {
      title: '8" x 10" Wood Print',
      imageName: 'wood_prints_2.jpg',
      alignment: Alignment.CENTER
    },
    {
      title: '11"x14" Wood Print',
      imageName: 'wood_prints_3.jpg',
      alignment: Alignment.CENTER
    },
    {
      title: '16"x 20" Wood Print',
      imageName: 'wood_prints_4.jpg',
      alignment: Alignment.CENTER
    }
  ];

  pieceCardData: ProductDetailCardData[] = [
    {
      title: 'Single Piece Wood prints',
      imageName: 'happy_memories1.jpg',
      description: 'Share your splendid picture with the impeccable blend of elegance through single piece wood prints and add life to your digital pictures.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Four Piece Wood prints',
      imageName: 'happy_memories3.jpg',
      description: 'Let your guests know about your creative side with the artistic four piece wood prints and narrate your special moments distinctly.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Three Wood Print Panels',
      imageName: 'happy_memories2.jpg',
      description: 'Share your special moments in a personalized manner by either narrating a story or expressions during an event with three print wood panels.',
      alignment: Alignment.CENTER
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
