import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecordService } from '../../shared/services/record/record.service';
import { Store } from '../../shared/services/store/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-records-container',
  templateUrl: './records-container.component.html',
  styleUrls: ['./records-container.component.scss']
})
export class RecordsContainerComponent implements OnInit, OnDestroy {
  records: any[];
  loading: boolean = false;

  constructor(private recordService: RecordService, private store: Store) { }

  ngOnInit() {
    this.recordService.getRecords().subscribe();
    this.store.changes.map(data => data.records).subscribe(records => {
      this.records = records;
      this.loading = false;
    });
  }

  ngOnDestroy() {

  }

  onCrossChecked(record): void {
    this.loading = true;
    this.recordService.removeRecord(record).subscribe();
  }

  onRecordCreated(record: any) {
    this.loading = true;
    // when backend success created record, add here on UI
    this.recordService.addRecord(record).subscribe();
  }
}
