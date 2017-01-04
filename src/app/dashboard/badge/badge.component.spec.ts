/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BadgeComponent } from './badge.component';
import { CardComponent } from '../card/card.component';
import { RouterLinkStubDirective } from '../../../testing/router-stubs';
import { PDialogStubComponent } from '../../../testing/third-party-stubs';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BadgeComponent,
        CardComponent,
        PDialogStubComponent,
        RouterLinkStubDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
