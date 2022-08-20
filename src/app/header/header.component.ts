import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  offerOne = 'We’re happy to have you here - claim your 5% site wide off Or free 8X8 canvas offer - ';
  offerTwo = 'UP TO 93% OFF CANVAS PRINTS + BUY 2 GET 1 FREE SITEWIDE! (CODE: B2G1) SHIPS IN 24 HRS!';

  mobileQuery: MediaQueryList;
  // fillerNav = Array.from({ length: 9 }, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    {
      name : 'Home',
      link : ''
    },
    {
      name : 'Canvas Wall Display',
      link : '/wall-display'
    }
  ];

  fillerContent = Array.from(
    {length: 10},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef,private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
