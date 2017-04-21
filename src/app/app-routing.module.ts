import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { RecordsContainerComponent } from './records/records-container/records-container.component';
import { NotFoundComponent } from './shared/cmps/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthComponent } from './home/auth/auth.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'dashboard', component: DashboardContainerComponent, /*canActivate: [AuthService]*/ },
  { path: 'records', component: RecordsContainerComponent, /*canActivate: [AuthService]*/ },
  { path: 'auth', component: AuthComponent},
  { path: '404', component: NotFoundComponent},
  // { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
