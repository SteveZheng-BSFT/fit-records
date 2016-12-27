import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterDrinkComponent } from './water/water-drink/water-drink.component';

const routes: Routes = [
  { path: '', redirectTo: 'water', pathMatch: 'full' },
  { path: 'water', component: WaterDrinkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
