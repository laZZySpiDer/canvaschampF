import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

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
  constructor() { }

  ngOnInit(): void {
  }

}
