import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { WallDisplayComponent } from './pages/wall-display/wall-display.component';

const routes: Routes = [{ path: 'wall-display', component: HomeComponent },
{ path: '', component: WallDisplayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
