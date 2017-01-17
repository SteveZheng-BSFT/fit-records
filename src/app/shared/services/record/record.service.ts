import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class RecordService {

  path: string = '/records';

  constructor(private apiService: ApiService) { }

  addRecord(record: Object) {
    // give a id to each record
    record['id'] = record['id'] || Math.random();

    return this.apiService.post(this.path, record);
  }

  getRecords(): any {
    return this.apiService.get(this.path);
  }

  removeRecord(record) {
    return this.apiService.del(`${this.path}/${record.id}`);
  }
}
