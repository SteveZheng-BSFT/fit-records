import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'p-calendar',
  template: ''
})
export class PCalendarStubComponent implements OnInit {
  @Input() ngModel: any;
  constructor() {
  }
  ngOnInit() {
  }
}

@Component({
  selector: 'p-dialog',
  template: ''
})
export class PDialogStubComponent implements OnInit {
  @Input() visible: any;
  @Input() resizable: boolean;
  @Input() responsive: boolean;
  @Input() modal: boolean;
  constructor() {
  }
  ngOnInit() {
  }
}
