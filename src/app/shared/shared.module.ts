import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GhostInputDirective } from './directives/ghost-input/ghost-input.directive';
import { LoaderComponent } from './cmps/loader/loader.component';
import { NotFoundComponent } from './cmps/not-found/not-found.component';
import { PhonePipe } from './pipes/phone/phone.pipe';
import { CheckboxDirective } from './directives/checkbox/checkbox.directive';

@NgModule({
    imports: [CommonModule],
    exports: [
      GhostInputDirective,
      LoaderComponent,
      NotFoundComponent,
      PhonePipe,
      CheckboxDirective
    ],
    declarations: [
      GhostInputDirective,
      LoaderComponent,
      NotFoundComponent,
      PhonePipe,
      CheckboxDirective
    ]
})
export class SharedModule { }
