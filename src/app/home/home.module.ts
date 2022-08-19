import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { WallDisplayComponent } from './pages/wall-display/wall-display.component';

@NgModule({
  declarations: [
    HomeComponent,
    WallDisplayComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ]
})
export class HomeModule { }
