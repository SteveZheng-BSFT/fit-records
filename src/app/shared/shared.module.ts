import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GhostInputDirective } from './directives/ghost-input/ghost-input.directive';
import { LoaderComponent } from './cmps/loader/loader.component';
import { NotFoundComponent } from './cmps/not-found/not-found.component';

@NgModule({
    imports: [CommonModule],
    exports: [
      GhostInputDirective,
      LoaderComponent,
      NotFoundComponent
    ],
    declarations: [
      GhostInputDirective,
      LoaderComponent,
      NotFoundComponent
    ]
})
export class SharedModule { }
