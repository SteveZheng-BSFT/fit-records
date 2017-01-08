import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsContainerComponent } from './records-container/records-container.component';
import { RecordCardComponent } from './record-card/record-card.component';
import { RecordCreatorComponent } from './record-creator/record-creator.component';
import { SharedModule } from '../shared/shared.module';
import { RecordService } from '../shared/services/record/record.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerComponent } from './record-creator/color-picker/color-picker.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RecordsContainerComponent,
    RecordCardComponent,
    RecordCreatorComponent,
    ColorPickerComponent
  ],
  providers: [RecordService]
})
export class RecordsModule { }
