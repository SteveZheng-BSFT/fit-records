import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records-container',
  templateUrl: './records-container.component.html',
  styleUrls: ['./records-container.component.scss']
})
export class RecordsContainerComponent implements OnInit {
  note: Object = {title: 'g', value: 'ggg', color: 'lightblue'};

  constructor() { }

  ngOnInit() {
  }

}
