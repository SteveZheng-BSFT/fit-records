import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../shared/services/record/record.service';

@Component({
  selector: 'app-records-container',
  templateUrl: './records-container.component.html',
  styleUrls: ['./records-container.component.scss']
})
export class RecordsContainerComponent implements OnInit {
  records: any[];

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.recordService.getRecords().subscribe(obj => {
      this.records = obj.data;
    })
  }

  onCrossChecked(record): void {
    this.recordService.removeRecord(record).subscribe(deletedRecord => {
      this.records.splice(this.records.findIndex(localRecord => localRecord.id === deletedRecord.id), 1)
    });
  }

  onRecordCreated(record: any) {
    // when backend success created record, add here on UI
    this.recordService.addRecord(record).subscribe(obj => this.records.push(obj.data))
  }
}
