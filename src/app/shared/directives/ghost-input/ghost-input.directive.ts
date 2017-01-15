import { Directive, ElementRef, Renderer, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appGhostInput]'
})
export class GhostInputDirective {
  elem: any;

  constructor(private er: ElementRef, private renderer: Renderer) {
    this.elem = er.nativeElement;
    // make parent relative because we want to child absolute
    renderer.setElementStyle(this.elem.parentNode, 'position', 'relative');
    // remove borders
    renderer.setElementStyle(this.elem, 'border-top', 'none');
    renderer.setElementStyle(this.elem, 'border-left', 'none');
    renderer.setElementStyle(this.elem, 'border-right', 'none');
    renderer.setElementStyle(this.elem, 'border-radius', '0');
    renderer.setElementStyle(this.elem, 'background-color', 'inherit');
    // add font change style
    renderer.setElementClass(this.elem, 'ghost-input', true);
    // if it initially has value, should stick on top
    if (this.elem.value) {
      this.renderer.setElementClass(this.elem, 'stay-top', true);
    }
  }

  @HostListener('blur') @HostListener('ngModelChange') @HostListener('hide') stickOnTop() {
    // when not focus, if there are text there, then force title stick on top
    if (this.elem.value) {
      this.renderer.setElementClass(this.elem, 'stay-top', true);
    } else {
      // when focus, or [when click submit and clean form, should listen ngmodelchange,
      // because DOM doesn't know modal changes], put placeholder down
      this.renderer.setElementClass(this.elem, 'stay-top', false);
    }
  }
}
