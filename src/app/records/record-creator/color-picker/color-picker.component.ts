import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Output() picked: EventEmitter<string>;
  picking: boolean = false;
  colors: string[] = ['#fff', 'pink', 'lightyellow', 'green', 'blue', 'red'];

  constructor() {
    this.picked = new EventEmitter();
  }

  ngOnInit() {
  }

  pick(color: string): void {
    this.picked.emit(color);
    this.picking = true;
  }

}
