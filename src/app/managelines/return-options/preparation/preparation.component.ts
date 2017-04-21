import { Component, OnInit } from '@angular/core';
import { ReturnOptionsComponent } from '../return-options.component';

@Component({
    selector: 'my-preparation',
    templateUrl: './preparation.component.html',
    styleUrls: ['./preparation.component.scss']
})
export class PreparationComponent implements OnInit {

    constructor(private parent: ReturnOptionsComponent) {
    }

    ngOnInit(): void {
        this.parent.returnStep = 'Device Prep';
    }
}
