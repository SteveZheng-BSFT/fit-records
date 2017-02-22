import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GhostInputDirective } from './directives/ghost-input/ghost-input.directive';
import { LoaderComponent } from './cmps/loader/loader.component';
import { NotFoundComponent } from './cmps/not-found/not-found.component';
import { PhonePipe } from './pipes/phone/phone.pipe';

@NgModule({
    imports: [CommonModule],
    exports: [
      GhostInputDirective,
      LoaderComponent,
      NotFoundComponent,
      PhonePipe
    ],
    declarations: [
      GhostInputDirective,
      LoaderComponent,
      NotFoundComponent,
      PhonePipe
    ]
})
export class SharedModule { }
