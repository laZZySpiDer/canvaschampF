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
import { AcrylicPrintsComponent } from './pages/home-decore-pages/acrylic-prints/acrylic-prints.component';
import { MetalPrintsComponent } from './pages/home-decore-pages/metal-prints/metal-prints.component';
import { WoodPrintsComponent } from './pages/home-decore-pages/wood-prints/wood-prints.component';
import { FramePrintsComponent } from './pages/home-decore-pages/frame-prints/frame-prints.component';
import { PhotoPillowComponent } from './pages/photo-gifts-pages/photo-pillow/photo-pillow.component';
import { PhotoMugComponent } from './pages/photo-gifts-pages/photo-mug/photo-mug.component';
import { PhotoCoasterComponent } from './pages/photo-gifts-pages/photo-coaster/photo-coaster.component';
import { PeelStickPrintsComponent } from './pages/photo-gifts-pages/peel-stick-prints/peel-stick-prints.component';
import { PosterPrintsComponent } from './pages/photo-gifts-pages/poster-prints/poster-prints.component';
import { UploadChoiceComponent } from './pages/upload-choice/upload-choice.component';

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
    AcrylicPrintsComponent,
    MetalPrintsComponent,
    WoodPrintsComponent,
    FramePrintsComponent,
    PhotoPillowComponent,
    PhotoMugComponent,
    PhotoCoasterComponent,
    PeelStickPrintsComponent,
    PosterPrintsComponent,
    UploadChoiceComponent,

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
