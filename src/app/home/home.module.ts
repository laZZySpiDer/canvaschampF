import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { WallDisplayComponent } from './pages/wall-display/wall-display.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './pages/cart/cart.component';
import { MaterialModule } from 'src/core/material.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CanvasPrintsComponent } from './pages/canvas-prints/canvas-prints.component';
import { PhotoCollageComponent } from './pages/photo-collage/photo-collage.component';

@NgModule({
  declarations: [
    HomeComponent,
    WallDisplayComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    CanvasPrintsComponent,
    PhotoCollageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeModule { }
