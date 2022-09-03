import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { ProfileService } from '../services/profile.service';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
 })
export class HomeComponent implements OnInit {

  imageList = [
    "../../assets/images/1.jpg",
    "../../assets/images/2.jpg",
    "../../assets/images/3.jpg",
    "../../assets/images/4.jpg",
  ]


  characteristicList = [
    {
      id: 1,
      heading : 'Ready to Ship within 24 hours',
      content : ' Over 100 custom products are ready to ship within 24 hours.',
      icon : 'local_shipping'
    },
    {
      id: 2,
      heading : 'Now Offering Buy Now, Pay Later',
      content : 'Pay in 4 interest - free payments on purchase of 500+ INR.',
      icon : 'payment'
    },
    {
      id: 3,
      heading : 'Over 600000 Prints Sold',
      content : `Since 2015, we've sold 600000 photo gifts to the worldwide.`,
      icon : 'shopping_basket'
    },
    {
      id: 4,
      heading : '100% Love-it Guarantee',
      content : 'Love it or send it back! We guarantee a full refund with no hassle.',
      icon : 'check_circle'
    },
  ]
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {

  }

}
