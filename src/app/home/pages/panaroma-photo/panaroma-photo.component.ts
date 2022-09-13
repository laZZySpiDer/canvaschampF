import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panaroma-photo',
  templateUrl: './panaroma-photo.component.html',
  styleUrls: ['./panaroma-photo.component.scss']
})
export class PanaromaPhotoComponent implements OnInit {
  title = 'Panoramic Photo Prints';
  rating = '4.4/5 out of 16430 reviews';
  discount = 'UP TO 93% OFF CANVAS PRINTS | PROMO APPLIED!';
  coupon = 'Buy 2 Get 1 Free USE CODE: B2G1CANVAS';
  productStrikePrice = '$133.38';
  productCPrice = '$17.34';
  discoutPercentage = '87% OFF';
  starCount = 4.7;
  imageName = '4.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
