import { Component, OnInit } from '@angular/core';
import { Alignment, ProductDetailCardData } from 'src/app/shared';

@Component({
  selector: 'app-frame-prints',
  templateUrl: './frame-prints.component.html',
  styleUrls: ['./frame-prints.component.scss']
})
export class FramePrintsComponent implements OnInit {
  title = 'FRAMED PRINTS';
  rating = '4.7/5 out of 185499 reviews';
  productDescription = 'It’s better when it is framed! Custom framing for digital prints, or mail us your art. Photos, canvases, textiles, and more – it’s easy and affordable.';
  discount = '55% OFF ON CUSTOM FRAMED PRINTS | PROMO APPLIED!';
  coupon = 'Extra 10% Off | USE CODE: FRAME10';
  productStrikePrice = '$34.39';
  productCPrice = '$15.48';
  starCount = 4.7;
  imageName = '1.jpg';

  // product card details
  productCardData: ProductDetailCardData[] = [
    {
      title: 'Black',
      imageName: 'frame-black.jpg',
      description: 'A sleek, modern design that looks great anywhere.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Brown Golden',
      imageName: 'frame-brown-golden.jpg',
      description: 'A classic rustic, country-style frame.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Golden',
      imageName: 'frame-golden.jpg',
      description: 'A clean, bright look that complements any print.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Blonde Maple',
      imageName: 'frame-blond-maple.jpg',
      description: 'A rustic feel and a splash of color.',
      alignment: Alignment.CENTER
    }, {
      title: 'Black Curved',
      imageName: 'frame-black-curved.jpg',
      description: 'The classic formal frame is perfect for studio photos.',
      alignment: Alignment.CENTER
    }
  ];

  frameDetails = ['Frames : From classic to modern, we have your frame.',
    'Paper : A choice between glossy paper or matte paper.',
    'Sizes : Custom sizes available from 8"x8" to 40"x40".',
    'Mats : We have the right mat in two colors you want.',
    'Hardware : Four customizing options on hardware and finish.'];
  constructor() { }

  ngOnInit(): void {
  }

}
