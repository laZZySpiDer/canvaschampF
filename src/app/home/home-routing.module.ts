import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CartComponent } from './pages/cart/cart.component';
import { WallDisplayComponent } from './pages/wall-display/wall-display.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wall-display', component: WallDisplayComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
