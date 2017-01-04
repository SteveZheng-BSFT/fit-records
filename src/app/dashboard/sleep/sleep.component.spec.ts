/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SleepComponent } from './sleep.component';
import { CardComponent } from '../card/card.component';
import { PDialogStubComponent } from '../../../testing/third-party-stubs';
import { RouterLinkStubDirective } from '../../../testing/router-stubs';

describe('SleepComponent', () => {
  let component: SleepComponent;
  let fixture: ComponentFixture<SleepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SleepComponent,
        CardComponent,
        PDialogStubComponent,
        RouterLinkStubDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
