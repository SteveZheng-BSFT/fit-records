import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { SleepComponent } from './sleep/sleep.component';
import { WeightComponent } from './weight/weight.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { StepsComponent } from './steps/steps.component';
import { FoodComponent } from './food/food.component';
import { BadgeComponent } from './badge/badge.component';
import { CaloriesComponent } from './calories/calories.component';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      CalendarModule,
      FormsModule
    ],
    exports: [],
    declarations: [
      DashboardContainerComponent,
      SleepComponent,
      WeightComponent,
      ExerciseComponent,
      StepsComponent,
      FoodComponent,
      BadgeComponent,
      CaloriesComponent
    ],
    providers: [],
})
export class DashboardModule { }
