import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  flipped: boolean;
  showTools: boolean;
  constructor(public el: ElementRef) { }

  ngOnInit() {
    this.flipped = false;
    this.showTools = false;
  }

  // click to flip card, true for front, false for back
  flip() {
    if (this.flipped) {
      this.el.nativeElement.children[0].children[0].style.transform = 'rotateY(0)';
    } else {
      this.el.nativeElement.children[0].children[0].style.transform = 'rotateY(180deg)';
    }
    this.flipped = !this.flipped;
  }

  triggerToolBox(): void {
    this.showTools = !this.showTools;
  }
}
