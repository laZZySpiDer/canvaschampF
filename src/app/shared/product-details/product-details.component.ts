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
  calculatedDiscountPercent = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateDiscountPercentage();

  }

  calculateDiscountPercentage(){
    if(this.strikePrice !== '' && this.cPrice !== ''){
      const sPrice = +this.strikePrice.substring(1);
      const cPrice = +this.cPrice.substring(1);

      const discoutPercentage = ((sPrice - cPrice)*100)/sPrice;
      this.calculatedDiscountPercent = Math.round(discoutPercentage);
    }
  }

}
