import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BtnNavService } from '../../shared/services/navigation/btn.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
    selector: 'my-return-device-prep',
    templateUrl: './return-options.component.html',
    styleUrls: ['./return-options.component.scss'],
    providers: [BtnNavService]
})
export class ReturnOptionsComponent implements OnInit, OnDestroy {
    public returnStep: string; // will be changed after it's child init
    public btns = {
        inspection: {
            disabled: true,
            routerLink: 'Preparation'
        },
        preparation: {
            disabled: true,
            routerLink: 'ReturnConfirmation'
        }
    };
    public currentBtnStatus: {disabled: boolean, routerLink: string};
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(private router: Router, private btnNavService: BtnNavService) {
    }

    ngOnInit(): void {
        // first hit this page must be inspection page
        this.currentBtnStatus = this.btns.inspection;
        this.btnNavService.factoryResetChecked$.takeUntil(this.ngUnsubscribe).subscribe((checked) => {
          this.currentBtnStatus.disabled = !checked;
        });
    }

    ngOnDestroy(): void {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }

    goNext(): void {
        this.router.navigate([this.currentBtnStatus.routerLink]).then(() => {
            this.currentBtnStatus = this.btns.preparation;
        });
    }
}
