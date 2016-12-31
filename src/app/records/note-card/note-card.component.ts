import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note: any;
  showCheck: boolean;
  @Output() checked: EventEmitter<string>;

  constructor() {
    this.checked = new EventEmitter();
  }

  ngOnInit() {
    this.showCheck = false;
  }

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {
    this.checked.next(this.note);
  }
}
