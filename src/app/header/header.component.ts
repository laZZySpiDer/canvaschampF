import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  offerOne = 'We’re happy to have you here - claim your 5% site wide off Or free 8X8 canvas offer - ';
  offerTwo = 'UP TO 93% OFF CANVAS PRINTS + BUY 2 GET 1 FREE SITEWIDE! (CODE: B2G1) SHIPS IN 24 HRS!';
  constructor() { }

  ngOnInit(): void {
  }

}
