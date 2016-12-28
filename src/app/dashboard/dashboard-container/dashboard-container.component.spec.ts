/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardContainerComponent } from './dashboard-container.component';
import { CaloriesComponent } from '../calories/calories.component';
import { BadgeComponent } from '../badge/badge.component';
import { ExerciseComponent } from '../exercise/exercise.component';
import { FoodComponent } from '../food/food.component';
import { WaterComponent } from '../water/water.component';
import { SleepComponent } from '../sleep/sleep.component';
import { StepsComponent } from '../steps/steps.component';
import { WeightComponent } from '../weight/weight.component';
import { PCalendarStubComponent } from '../../../testing/third-party-stubs';

describe('DashboardContainerComponent', () => {
  let component: DashboardContainerComponent;
  let fixture: ComponentFixture<DashboardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardContainerComponent,
        CaloriesComponent,
        BadgeComponent,
        ExerciseComponent,
        FoodComponent,
        WaterComponent,
        SleepComponent,
        StepsComponent,
        WeightComponent,
        PCalendarStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
