import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-restocking-fee',
    templateUrl: './restocking-fee.component.html',
    styleUrls: ['./restocking-fee.component.scss']
})
export class RestockingFeeComponent implements OnInit {
    public restockingFee = 35;

    constructor() {
    }

    ngOnInit() {
    }
}

// if you don't have src/app/app.module.ts set up, then you may declare this component manually to make it works
