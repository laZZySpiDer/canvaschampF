import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Innovative Canvas';

  constructor(@Inject(DOCUMENT) document: Document) { }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //    if (window.pageYOffset > 550) {
  //      let element = document.getElementById('app-header') as HTMLElement;
  //      element.classList.add('sticky');
  //    } else {
  //     let element = document.getElementById('app-header') as HTMLElement;
  //       element.classList.remove('sticky'); 
  //    }
  // }
}
