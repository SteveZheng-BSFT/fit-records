import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsContainerComponent } from './records-container/records-container.component';
import { NoteCardComponent } from './note-card/note-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RecordsContainerComponent,
    NoteCardComponent
  ]
})
export class RecordsModule { }
