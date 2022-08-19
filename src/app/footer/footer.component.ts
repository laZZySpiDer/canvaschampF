import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  aboutData = ['About Us', 'Privacy Policy', 'Shipping', 'Gift Card', 'Sitemap'];
  helpData = ['Contact us', 'FAQs and Help', 'Terms of Use', 'Accessibility'];
  inspirationData = ['Refer and Earn',
    'Affiliate Program',
    'Pricing and Options',
    'Customer Reviews',
    'Canvas Prints Reviews',
    'Special Offers'];
  productsData = ['Canvas Prints',
    'Canvas Products',
    'Collage Gifts',
    'Photo Mosaic',
    'Panoramic Photo Prints',
    'Large Canvas Prints'];
    ourProductsData = ['Photo Pillows',
      'Wood Prints',
      'Photo Mugs',
      'Acrylic Blocks']

  constructor() { }

  ngOnInit(): void {
  }

}
