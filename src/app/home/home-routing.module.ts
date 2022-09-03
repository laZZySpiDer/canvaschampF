import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CanvasPrintsComponent, PhotoCollageComponent } from './pages';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { WallDisplayComponent } from './pages/wall-display/wall-display.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'canvas-prints', component: CanvasPrintsComponent },
  { path: 'wall-display', component: WallDisplayComponent },
  { path: 'photo-collage', component: PhotoCollageComponent },
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
