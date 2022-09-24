import { Component, OnInit } from '@angular/core';
import { Alignment, ProductDetailCardData } from 'src/app/shared';

@Component({
  selector: 'app-metal-prints',
  templateUrl: './metal-prints.component.html',
  styleUrls: ['./metal-prints.component.scss']
})
export class MetalPrintsComponent implements OnInit {
  title = 'METAL PRINTS';
  rating = '4.7/5 out of 185499 reviews';
  productDescription = 'The most vivid print media at your fingertips!';
  discount = '60% OFF ON METAL PHOTO PRINTS | PROMO APPLIED!';
  coupon = 'Buy 2 Get 1 Free | USE CODE: B2G1METAL';
  productStrikePrice = '$13.65';
  productCPrice = '$5.46';
  discoutPercentage = '60% OFF';
  starCount = 4.7;
  imageName = '1.jpg';

  // product card details
  productCardData: ProductDetailCardData[] = [
    {
      title: 'Durable Beyond Belief',
      imageName: 'durable-beyond-belief.jpg',
      description: 'The durability of metal prints is incomparable to traditional print media. Our metal prints are waterproof and resistant against stains, scratches, and won’t fade from UV Rays.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Great Print Quality',
      imageName: 'great_print_quality.jpg',
      description: 'At CanvasChamp, our printing process produces high quality photo reproduction.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Latest Technology Innovation',
      imageName: 'latest_technology_innovation.jpg',
      description: 'We utilize the latest technological methods in the printing industry to make sure your metal prints are high quality.',
      alignment: Alignment.CENTER
    },
    {
      title: 'Alternative to Traditional Print',
      imageName: 'good_alternative.jpg',
      description: 'Our metal prints are a good option if you want to preserve your photo memories for years to come with little to no maintenance.',
      alignment: Alignment.CENTER
    }
  ];

  frameCardData: ProductDetailCardData[] = [
    {
      title: 'Black Frame',
      imageName: 'black_frame.png',
      description: 'Create a stunning, bold look with our classic black frame',
      alignment: Alignment.CENTER
    },
    {
      title: 'Brown Frame',
      imageName: 'brown_frame.png',
      description: 'Our brown frame provides a warm feel to your photo print and is ideal',
      alignment: Alignment.CENTER
    },
    {
      title: 'Brown Golden Frame',
      imageName: 'brown_golden_frame.png',
      description: 'Give your metal prints a touch of luxury with this detailed frame',
      alignment: Alignment.CENTER
    },
    {
      title: 'Golden Frame',
      imageName: 'golden_frame.png',
      description: 'Its all in the details with our golden frame, keep your guests attention with this décor',
      alignment: Alignment.CENTER
    }
  ];

  filterCardData: ProductDetailCardData[] = [
    {
      title: 'Original Effect',
      imageName: 'origional_effect.jpg',
      description: 'Your metal photo print will shine with natural brilliance, look amazingly dynamic, blow away the concept of durable by lasting a lifetime and never-never-never fade. So when you prefer the look of an original photo, choose our original effect option and enjoy a metal print with dramatic effect.',
      buttonName: 'START ORDER',
      alignment: Alignment.LEFT
    },
    {
      title: 'Sepia Effect',
      imageName: 'metal_photo_printing.jpg',
      description: 'Create a vintage and long lasting impression when you use the sepia color effect on your custom metal photo print. Sepia is a beautiful reddish-brown effect that gives your photos an antiqued look; It has even been known as a romantic filter.',
      buttonName: 'START ORDER',
      alignment: Alignment.LEFT
    },
    {
      title: 'Gray Scale',
      imageName: 'gray_scale_effect.jpg',
      description: 'Our gray scale color effect is so much more than "black and white." This option takes advantage of every shade of the color imaginable, replacing the colors with an equally intense gray shade.From pure white to total black and every color between, each color presents its own intensity which results in varying degrees and shades of gray.',
      buttonName: 'START ORDER',
      alignment: Alignment.LEFT
    },
    {
      title: 'Surface Options',
      imageName: 'surface_option.jpg',
      description: 'We offer a white surface for your metal prints because it enhances and brightens your photos. It creates more depth, color saturation, and sharper contrast. The white surface is to go-to choice for everything from portraits to candid’s and will provide an amazing final product with a real WOW! factor.',
      buttonName: 'START ORDER',
      alignment: Alignment.LEFT
    },
    {
      title: 'Glossy Finish',
      imageName: 'glossy_finish.jpg',
      description: 'Glossy finishes enhance the depth, saturation, and contrast provided with the white surface. The glossy finish is the photographers choice for outdoor and nature shots, everyday snaps, and any photo with vibrant colors.',
      buttonName: 'START ORDER',
      alignment: Alignment.LEFT
    }
  ];

  reasonList = [
    'Fade and yellow resistant',
    'We provide the best quality printing',
    'Sharper details, cleaner edges',
    'Affordable no matter your budget',
    'Vibrant, rich colors',
    'Choose original, sepia or gray scale',
    'Choose a frame or go frameless',
    'Available in glossy finish',
    'No photo surface protection needed',
    'Many hanging options available',
    'These prints last forever and nearly indestructible'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
