import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CanvasPrintsComponent, PhotoCollageComponent } from './pages';
import { CartComponent } from './pages/cart/cart.component';
import { HangingCanvasComponent } from './pages/hanging-canvas/hanging-canvas.component';
import { HexagonCanvasComponent } from './pages/hexagon-canvas/hexagon-canvas.component';
import { LoginComponent } from './pages/login/login.component';
import { PanaromaPhotoComponent } from './pages/panaroma-photo/panaroma-photo.component';
import { PopArtComponent } from './pages/pop-art/pop-art.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SplitPhotoComponent } from './pages/split-photo/split-photo.component';
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
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
