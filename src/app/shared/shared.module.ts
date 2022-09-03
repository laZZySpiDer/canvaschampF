import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailCardComponent } from './product-detail-card/product-detail-card.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailsComponent,
    ProductDetailCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductCardComponent, ProductDetailsComponent, ProductDetailCardComponent]
})
export class SharedModule { }
