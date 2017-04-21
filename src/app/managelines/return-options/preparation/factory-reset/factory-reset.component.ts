import { Component, OnInit } from '@angular/core';
import { BtnNavService } from '../../../../shared/services/navigation/btn.service';
// import { ManagelinesService } from 'services';

@Component({
    selector: 'my-factory-reset',
    templateUrl: './factory-reset.component.html',
    styleUrls: ['./factory-reset.component.scss']
})
export class FactoryResetComponent implements OnInit {
    public turnedOff = true;
    public isIphone = true;
    public factoryResetConfirmed = false;

    constructor(private btnNavService: BtnNavService, /*private managelinesService: ManagelinesService*/) {
    }

    ngOnInit(): void {
    }

    confirmReset(event): void {
        this.btnNavService.checkFactoryReset(event.target.checked);
    }

    turnOffIphone() {}
}

// if you don't have src/app/app.module.ts set up, then you may declare this component manually to make it works
