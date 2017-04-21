import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BtnNavService {
  // Observable source
  private factoryResetCheckedSource = new BehaviorSubject(null);
  // Observable steam
  public factoryResetChecked$ = this.factoryResetCheckedSource.asObservable();

  constructor() {
  }

  checkFactoryReset(checked: boolean) {
    this.factoryResetCheckedSource.next(checked);
  }
}
