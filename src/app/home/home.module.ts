import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      SharedModule,
      FormsModule
    ],
    exports: [],
    declarations: [HomeComponent, AuthComponent],
    providers: [],
})
export class HomeModule { }
