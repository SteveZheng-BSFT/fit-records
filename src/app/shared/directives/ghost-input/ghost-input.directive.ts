import { Directive, ElementRef, Renderer, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appGhostInput]'
})
export class GhostInputDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    // make parent relative because we want to child absolute
    renderer.setElementStyle(el.nativeElement.parentNode, 'position', 'relative');
    // remove borders
    renderer.setElementStyle(el.nativeElement, 'border-top', 'none');
    renderer.setElementStyle(el.nativeElement, 'border-left', 'none');
    renderer.setElementStyle(el.nativeElement, 'border-right', 'none');
    renderer.setElementStyle(el.nativeElement, 'border-radius', '0');
    // add font change style
    renderer.setElementClass(el.nativeElement, 'ghost-input', true);
    // if it initially has value, should stick on top
    if (this.el.nativeElement.value) {
      this.renderer.setElementClass(this.el.nativeElement, 'stay-top', true);
    }
  }

  @HostListener('blur') @HostListener('ngModelChange') @HostListener('hide') stickOnTop() {
    // when not focus, if there are text there, then force title stick on top
    if (this.el.nativeElement.value) {
      this.renderer.setElementClass(this.el.nativeElement, 'stay-top', true);
    } else {
      // when focus, or [when click submit and clean form, should listen ngmodelchange,
      // because DOM doesn't know modal changes], put placeholder down
      this.renderer.setElementClass(this.el.nativeElement, 'stay-top', false);
    }
  }
}
