import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { WaterDrinkComponent } from './water/water-drink/water-drink.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardContainerComponent },
  { path: 'water', component: WaterDrinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
