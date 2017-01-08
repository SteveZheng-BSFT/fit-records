import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Output() picked: EventEmitter<string>;
  colors: string[] = ['#fff', 'pink', 'lightyellow', 'green', 'blue', 'red'];
  constructor() {
    this.picked = new EventEmitter(); // todo why should put here
  }

  ngOnInit() {
  }

  pick(color: string): void {
    this.picked.emit(color);
  }

}
