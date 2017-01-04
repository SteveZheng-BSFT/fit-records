import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appGhostInput]'
})
export class GhostInputDirective {

  constructor(public el: ElementRef, public renderer: Renderer) {
    // make parent relative because we want to child absolute
    renderer.setElementStyle(el.nativeElement.parentNode, 'position', 'relative');
    // remove borders
    renderer.setElementStyle(el.nativeElement, 'border-top', 'none');
    renderer.setElementStyle(el.nativeElement, 'border-left', 'none');
    renderer.setElementStyle(el.nativeElement, 'border-right', 'none');
    renderer.setElementStyle(el.nativeElement, 'border-radius', '0');
    // add font change style
    renderer.setElementClass(el.nativeElement, 'ghost-input', true);
  }

  @HostListener('blur') onBlur() {
    // when not focus, if there are text there, then force title stick on top
    if (this.el.nativeElement.value !== '') {
      this.renderer.setElementClass(this.el.nativeElement, 'stay-top', true);
    } else {
      this.renderer.setElementClass(this.el.nativeElement, 'stay-top', false);
    }
  }
}
