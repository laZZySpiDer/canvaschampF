import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall-display',
  templateUrl: './wall-display.component.html',
  styleUrls: ['./wall-display.component.scss']
})
export class WallDisplayComponent implements OnInit {
  dimension = '24"x18"';
  strikePrice = '$183.57';
  cprice = '$33.33';
  varietyList = ['12"x18" Thin wrap (Canvas Lite)', '10"x8" Thin wrap (Canvas Lite)'];

  constructor() { }

  ngOnInit(): void {
  }

}
