import { Injectable } from '@angular/core';

@Injectable()
export class RecordService {

  records: Object[] = [
    {title: 'g', content: 'ggg', color: 'lightblue'},
    {title: 'h', content: 'hhh', color: 'pink'},
    {title: 'k', content: 'kkk', color: 'green'}
  ];
  constructor() { }

  addRecord(record: Object): void {
    record['color'] = record['color'] || 'lightyellow';
    this.records.push(record);
  }

  removeRecord(index: number): void {
    this.records.splice(index, 1);
  }
}
