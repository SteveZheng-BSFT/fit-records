import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChildren, Renderer } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Output() picked: EventEmitter<string>;
  colors: string[] = ['#ffffff', '#ffff8d', '#FFd180', '#ffbb00', '#ff8a80',
                      '#cfd8dc', '#a7ffeb', '#ccff90', '#80d8ff', '#2B9CD8'];
  lastClickedColor: any = this.renderer.createElement(null, 'div');

  constructor(private renderer: Renderer) {
    this.picked = new EventEmitter();
  }
// upgrade to bootstrap alpha 6, difference init in init/outside
  ngOnInit() {
  }

  pick(color: string, event): void {
    this.picked.emit(color);
    // set last clicked ele to original
    this.renderer.setElementClass(this.lastClickedColor, 'picking', false);
    this.renderer.setElementClass(event.target, 'picking', true);
    // set this as old clicked ele
    this.lastClickedColor = event.target;
  }

}
