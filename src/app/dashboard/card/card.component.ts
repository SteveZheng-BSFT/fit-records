import { Component, OnInit, ElementRef, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('toolVisibility', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class CardComponent implements OnInit {
  quickView: boolean;
  flipped: boolean;
  showTools: string;
  @Input() routeTo: string = '';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.quickView = false;
    this.flipped = false;
    this.showTools = 'hidden';
  }

  // click to flip card, true for front, false for back
  flip(): void {
    if (this.flipped) {
      this.el.nativeElement.children[0].children[0].style.transform = 'rotateY(0)';
    } else {
      this.el.nativeElement.children[0].children[0].style.transform = 'rotateY(180deg)';
    }
    this.flipped = !this.flipped;
  }

  triggerToolBox(): void {
    this.showTools = this.showTools == 'shown'? 'hidden': 'shown';
  }

  showQuickView(): void {
    this.quickView = true;
  }
}
