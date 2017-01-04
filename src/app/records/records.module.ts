import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsContainerComponent } from './records-container/records-container.component';
import { RecordCardComponent } from './record-card/record-card.component';
import { RecordCreatorComponent } from './record-creator/record-creator.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    RecordsContainerComponent,
    RecordCardComponent,
    RecordCreatorComponent
  ]
})
export class RecordsModule { }
