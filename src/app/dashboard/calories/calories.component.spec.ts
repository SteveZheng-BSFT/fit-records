/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaloriesComponent } from './calories.component';
import { CardComponent } from '../card/card.component';
import { PDialogStubComponent } from '../../../testing/third-party-stubs';
import { RouterLinkStubDirective } from '../../../testing/router-stubs';

describe('CaloriesComponent', () => {
  let component: CaloriesComponent;
  let fixture: ComponentFixture<CaloriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CaloriesComponent,
        CardComponent,
        PDialogStubComponent,
        RouterLinkStubDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
