import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GhostInputDirective } from './directives/ghost-input/ghost-input.directive';

@NgModule({
    imports: [CommonModule],
    exports: [
      GhostInputDirective
    ],
    declarations: [
      GhostInputDirective
    ],
    providers: [],
})
export class SharedModule { }
