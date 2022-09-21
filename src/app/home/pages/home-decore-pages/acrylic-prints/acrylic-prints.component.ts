import { Component, OnInit } from '@angular/core';
import { Alignment, ProductDetailCardData } from 'src/app/shared';

@Component({
  selector: 'app-acrylic-prints',
  templateUrl: './acrylic-prints.component.html',
  styleUrls: ['./acrylic-prints.component.scss']
})
export class AcrylicPrintsComponent implements OnInit {
  // product details input 
  title = 'Acrylic Prints';
  rating = '4.7/5 out of 185499 reviews';
  discount = '70% OFF ACRYLIC PHOTO PRINTS | PROMO APPLIED!';
  coupon = 'Buy 2 Get 1 Free | USE CODE: B2G1ACRY';
  productStrikePrice = '$40.18';
  productCPrice = '$12.05';
  discoutPercentage = '70% OFF';
  starCount = 4.7;
  imageName = '1.jpg';

    // product card details
    productCardData: ProductDetailCardData[] = [
      {
        title: 'French Cleat',
        imageName: '3.jpg',
        description: 'Provides a perfect level hanging for any open-back frames. This hanger has an interlocking bracket that gives safety and security. It wont let the acrylic print fall off the wall even in an earthquake. Made of metal construction.',
        alignment: Alignment.CENTER
      },
      {
        title: 'Table Stand',
        imageName: '4.jpg',
        description: 'Use beautiful table stands to display your acrylic prints with hands off! A table stand to make your photos seem supported by air on the table will be enough to create a mystic aura around your picture.',
        alignment: Alignment.CENTER
      },
      {
        title: 'Front Mounts',
        imageName: '2.jpg',
        description: 'Make your acrylic prints stand out with front mounts that decorate your best pictures stylishly. Affix the front mounts to the prints and attach both to the wall.',
        alignment: Alignment.CENTER
      }
    ];

    orderProcessCardData: ProductDetailCardData[] = [
      {
        title: 'Upload Artwork',
        imageName: 'upload-artwork.jpg',
        description: 'First, you need to send us the artwork required to print on the acrylic print.',
        alignment: Alignment.CENTER
      },
      {
        title: 'Ascertain Size and Layout',
        imageName: 'ascertain-size-layout.jpg',
        description: 'Specify the ideal size and picture layout that you require for the best results.',
        alignment: Alignment.CENTER
      },
      {
        title: 'Place Order',
        imageName: 'place-order.jpg',
        description: 'Add to cart, pay and let us work our magic with spectacular details.',
        alignment: Alignment.CENTER
      }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
