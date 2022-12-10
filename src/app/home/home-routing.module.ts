import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CanvasPrintsComponent, PhotoCollageComponent } from './pages';
import { CartComponent } from './pages/cart/cart.component';
import { HangingCanvasComponent } from './pages/hanging-canvas/hanging-canvas.component';
import { HexagonCanvasComponent } from './pages/hexagon-canvas/hexagon-canvas.component';
import { AcrylicPrintsComponent } from './pages/home-decore-pages/acrylic-prints/acrylic-prints.component';
import { FramePrintsComponent } from './pages/home-decore-pages/frame-prints/frame-prints.component';
import { MetalPrintsComponent } from './pages/home-decore-pages/metal-prints/metal-prints.component';
import { WoodPrintsComponent } from './pages/home-decore-pages/wood-prints/wood-prints.component';
import { LoginComponent } from './pages/login/login.component';
import { PanaromaPhotoComponent } from './pages/panaroma-photo/panaroma-photo.component';
import { PeelStickPrintsComponent } from './pages/photo-gifts-pages/peel-stick-prints/peel-stick-prints.component';
import { PhotoCoasterComponent } from './pages/photo-gifts-pages/photo-coaster/photo-coaster.component';
import { PhotoMugComponent } from './pages/photo-gifts-pages/photo-mug/photo-mug.component';
import { PhotoPillowComponent } from './pages/photo-gifts-pages/photo-pillow/photo-pillow.component';
import { PosterPrintsComponent } from './pages/photo-gifts-pages/poster-prints/poster-prints.component';
import { PopArtComponent } from './pages/pop-art/pop-art.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SplitPhotoComponent } from './pages/split-photo/split-photo.component';
import { UploadChoiceComponent } from './pages/upload-choice/upload-choice.component';
import { WallDisplayComponent } from './pages/wall-display/wall-display.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'canvas-prints', component: CanvasPrintsComponent },
  { path: 'wall-display', component: WallDisplayComponent },
  { path: 'photo-collage', component: PhotoCollageComponent },
  { path: 'pop-art-canvas', component: PopArtComponent },
  { path: 'split-photo', component: SplitPhotoComponent },
  { path: 'panaroma-photo', component: PanaromaPhotoComponent },
  { path: 'hexagon-canvas', component: HexagonCanvasComponent },
  { path: 'hanaging-canvas', component: HangingCanvasComponent },
  { path: 'acrylic-prints', component: AcrylicPrintsComponent },
  { path: 'metal-prints', component: MetalPrintsComponent },
  { path: 'wood-prints', component: WoodPrintsComponent },
  { path: 'framed-prints', component: FramePrintsComponent },
  { path: 'photo-pillow', component: PhotoPillowComponent },
  { path: 'photo-mug', component: PhotoMugComponent },
  { path: 'photo-coaster', component: PhotoCoasterComponent },
  { path: 'peel-stick-prints', component: PeelStickPrintsComponent },
  { path: 'poster-prints', component: PosterPrintsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'upload-choice', component: UploadChoiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
