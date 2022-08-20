import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { WallDisplayComponent } from './pages/wall-display/wall-display.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    WallDisplayComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    SharedModule
  ]
})
export class HomeModule { }
