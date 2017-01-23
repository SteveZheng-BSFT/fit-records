import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [],
    declarations: [HomeComponent, AuthComponent],
    providers: [],
})
export class HomeModule { }
