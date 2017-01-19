import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GhostInputDirective } from './directives/ghost-input/ghost-input.directive';
import { LoaderComponent } from './cmps/loader/loader.component';

@NgModule({
    imports: [CommonModule],
    exports: [
      GhostInputDirective,
      LoaderComponent
    ],
    declarations: [
      GhostInputDirective,
      LoaderComponent
    ]
})
export class SharedModule { }
