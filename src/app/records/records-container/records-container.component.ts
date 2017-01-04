import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records-container',
  templateUrl: './records-container.component.html',
  styleUrls: ['./records-container.component.scss']
})
export class RecordsContainerComponent implements OnInit {
  notes: Object[] = [
    {title: 'g', value: 'ggg', color: 'lightblue'},
    {title: 'h', value: 'hhh', color: 'pink'},
    {title: 'k', value: 'kkk', color: 'green'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onNoteChecked(index: number): void {
    this.notes.splice(index, 1);
  }
}
