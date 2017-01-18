import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { StoreHelper } from '../store/store-helper';

@Injectable()
export class RecordService {

  path: string = '/records';

  constructor(private apiService: ApiService, private storeHelper: StoreHelper) { }

  addRecord(record: Object) {
    // give a id to each record
    record['id'] = record['id'] || Math.random();

    return this.apiService.post(this.path, record)
      .do(res => this.storeHelper.add('records', res.data)); // do: get notified but don't affect them
  }

  getRecords(): any {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('records', res.data));
  }

  removeRecord(record) {
    return this.apiService.del(`${this.path}/${record.id}`)
      .do(deletedRecord => this.storeHelper.findAndDelete('records', deletedRecord.id));
  }
}
