import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  offerOne = 'We’re happy to have you here - claim your 5% site wide off Or free 8X8 canvas offer - ';
  offerTwo = 'UP TO 93% OFF CANVAS PRINTS + BUY 2 GET 1 FREE SITEWIDE! (CODE: B2G1) SHIPS IN 24 HRS!';
  @ViewChild('snav') sidenav: any;
  sideNavOpen: boolean = false;
  largerScreen: boolean = false;
  mobileQuery: MediaQueryList;
  // fillerNav = Array.from({ length: 9 }, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    {
      name: 'Home',
      link: '',
      child: []
    },
    {
      name: 'Canvas Shop',
      link: '',
      child: [{
        name: 'Canvas Prints',
        link: '/canvas-prints',
      }, {
        name: 'Wall Display',
        link: '/wall-display',
      }, {
        name: 'Photo Collage',
        link: '/photo-collage',
      }, {
        name: 'Pop Art Canvas',
        link: '/pop-art-canvas',
      }, {
        name: 'Panaroma Photo Canvas',
        link: '/panaroma-photo',
      }, {
        name: 'Hexagon Canvas',
        link: '/hexagon-canvas',
      }, {
        name: 'Hanging Photo Canvas',
        link: '/hanaging-canvas',
      }, {
        name: 'Split Photo Canvas',
        link: '/split-photo',
      },]
    },
    {
      name: 'Home Decor',
      link: '',
      child: [{
        name: 'Acrylic Prints',
        link: '/acrylic-prints',
      }, {
        name: 'Metal Prints',
        link: '/metal-prints',
      }, {
        name: 'Wood Prints',
        link: '/wood-prints',
      }, {
        name: 'Framed Prints',
        link: '/framed-prints',
      }]
    },
    {
      name: 'Photo Gifts',
      link: '',
      child: [{
        name: 'Photo Pillow',
        link: '/photo-pillow',
      }, {
        name: 'Photo Mug',
        link: '/photo-mug',
      }, {
        name: 'Photo Coaster',
        link: '/photo-coaster',
      }, {
        name: 'Peel n Stick Prints',
        link: '/peel-stick-prints',
      }, {
        name: 'Poster Prints',
        link: '/poster-prints',
      }]
    },
    {
      name: 'Login',
      link: '/login',
      child: []
    },
    {
      name: 'Register',
      link: '/register',
      child: []
    }
  ];

  fillerContent = Array.from(
    { length: 10 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, public breakPointObserver: BreakpointObserver, private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // get the viewport width
    this.breakPointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.largerScreen = false;
          this.sidenav.close();
        } else {
          this.largerScreen = true;
          this.sidenav.open();
        }
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleSideNav() {
    if (this.largerScreen) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

}
