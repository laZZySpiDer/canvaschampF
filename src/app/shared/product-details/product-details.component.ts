import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input('title') title = '';
  @Input('imageName') imageName = '';
  @Input('rating') rating = '';
  @Input('discount') discount = '';
  @Input('coupon') coupon = '';
  @Input('strikePrice') strikePrice = '';
  @Input('cPrice') cPrice = '';
  @Input('discoutPercentage') discoutPercentage = '';
  @Input('starCount') starCount = 0;
  @Input('productDescription') productDescription!: string;
  @Input('productDescriptionList') productDescriptionList!: string[];

  totalStarCount = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
