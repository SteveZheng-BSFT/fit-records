import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnOptionsComponent } from './return-options';
import { PreparationComponent } from './return-options/preparation';
import { ReturnConfirmationComponent } from './return-options/confirm/confirmation';

const routes: Routes = [
    { path: 'ReturnOptions', component: ReturnOptionsComponent, children: [
        {path: '', redirectTo: 'Preparation', pathMatch: 'full'},
        {path: 'Preparation', component: PreparationComponent},
      {path: 'ReturnConfirmation', component: ReturnConfirmationComponent}
    ] },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManageLinesRoutingModule { }
