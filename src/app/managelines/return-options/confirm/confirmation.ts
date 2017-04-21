import { Component, OnInit } from '@angular/core';

@Component({
  template: `    
    <button [disabled]="disabled">lookme</button>
  `
})
export class ReturnConfirmationComponent implements OnInit {
  disabled = true;
  constructor() {
  }

  ngOnInit() {
  }
}
