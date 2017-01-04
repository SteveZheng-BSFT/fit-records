import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit {
  @Input() note: any = {};
  showCheck: boolean;
  @Output() checked: EventEmitter<string>;

  constructor() {
    this.checked = new EventEmitter();
  }

  ngOnInit() {
    this.showCheck = false;
  }

  toggleCheck(): void {
    this.showCheck = !this.showCheck;
  }

  onChecked(): void {
    this.checked.emit(this.note);
  }
}
