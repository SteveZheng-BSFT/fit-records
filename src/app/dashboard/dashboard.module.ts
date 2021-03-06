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
import { CalendarModule, DialogModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { WaterComponent } from './water/water.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      CalendarModule,
      DialogModule,
      RouterModule
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
      CaloriesComponent,
      WaterComponent,
      CardComponent
    ]
})
export class DashboardModule { }
