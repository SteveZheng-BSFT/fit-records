import { RestockingFeeComponent } from './return-options/preparation/restocking-fee';
import { FactoryResetComponent } from './return-options/preparation/factory-reset';
import { ReturnOptionsComponent } from './return-options';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageLinesRoutingModule } from './managelines-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreparationComponent } from './return-options/preparation';
import { SplitCardComponent } from './split-card/split-card.component';
import { ReturnConfirmationComponent } from './return-options/confirm/confirmation';

@NgModule({
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        CommonModule,

        ManageLinesRoutingModule,

        FormsModule,
        ReactiveFormsModule,

    ],
    exports: [
    ],
    declarations: [
        RestockingFeeComponent,
        FactoryResetComponent,
        ReturnOptionsComponent,
        PreparationComponent,
SplitCardComponent,
      ReturnConfirmationComponent
    ],
    providers: [
    ],
    entryComponents: [
    ]
})
export class ManageLinesModule { }
