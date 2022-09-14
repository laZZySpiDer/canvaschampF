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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { PopArtComponent } from './pages/pop-art/pop-art.component';
import { SplitPhotoComponent } from './pages/split-photo/split-photo.component';
import { PanaromaPhotoComponent } from './pages/panaroma-photo/panaroma-photo.component';
import { HexagonCanvasComponent } from './pages/hexagon-canvas/hexagon-canvas.component';
import { HangingCanvasComponent } from './pages/hanging-canvas/hanging-canvas.component';

@NgModule({
  declarations: [
    HomeComponent,
    WallDisplayComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    CanvasPrintsComponent,
    PhotoCollageComponent,
    ProfileComponent,
    PopArtComponent,
    SplitPhotoComponent,
    PanaromaPhotoComponent,
    HexagonCanvasComponent,
    HangingCanvasComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
