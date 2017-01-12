import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../shared/services/record/record.service';

@Component({
  selector: 'app-records-container',
  templateUrl: './records-container.component.html',
  styleUrls: ['./records-container.component.scss']
})
export class RecordsContainerComponent implements OnInit {
  constructor(private recordService: RecordService) { }

  ngOnInit() {
  }

  onNoteChecked(index: number): void {
    this.recordService.removeRecord(index);
  }
}
