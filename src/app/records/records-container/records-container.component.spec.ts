/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecordsContainerComponent } from './records-container.component';
import { RecordCardComponent } from '../record-card/record-card.component';
import { RecordCreatorComponent } from '../record-creator/record-creator.component';

describe('RecordsContainerComponent', () => {
  let component: RecordsContainerComponent;
  let fixture: ComponentFixture<RecordsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecordsContainerComponent,
        RecordCardComponent,
        RecordCreatorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
