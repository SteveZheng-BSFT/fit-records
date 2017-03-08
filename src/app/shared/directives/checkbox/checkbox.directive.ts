import { Directive, ElementRef, Renderer, HostListener, Input, OnInit } from '@angular/core';

/*
 * should be used this way:
 * <label myCheckbox position='left'>
 *     <input type='checkbox'>
 * </label>
 * myCheckbox = any px
 * position = left/right
 * */
@Directive({
  selector: '[myCheckbox]'
})
export class CheckboxDirective implements OnInit {

  @Input('myCheckbox') boxSize: string;
  @Input() position: string; // default always stay right
  public rootElem: any;
  public oldCheckbox: any;
  public newCheckbox: any;

  constructor(public el: ElementRef, public renderer: Renderer) {
  }

  // inner elements get initialized before ngOnInit but after constructor
  ngOnInit(): void {
    this.boxSize = this.boxSize || '32px';
    this.rootElem = this.el.nativeElement;
    this.oldCheckbox = this.rootElem.children[0];
    // not using original box
    this.renderer.setElementStyle(this.oldCheckbox, 'display', 'none');

    // create our checkbox
    this.newCheckbox = this.renderer.createElement(this.rootElem, 'span');
    // set style to new checkbox
    this.renderer.setElementStyle(this.newCheckbox, 'display', 'inline-block');
    this.renderer.setElementStyle(this.newCheckbox, 'background', '#FBFCFC');
    this.renderer.setElementStyle(this.newCheckbox, 'border', 'solid 1px #B1B9BF');
    this.renderer.setElementStyle(this.newCheckbox, 'border-radius', '2px');
    this.renderer.setElementStyle(this.newCheckbox, 'width', this.boxSize);
    this.renderer.setElementStyle(this.newCheckbox, 'height', this.boxSize);
    this.renderer.setElementStyle(this.newCheckbox, 'cursor', 'pointer');
    this.renderer.setElementStyle(this.newCheckbox, 'float', this.position);

    let marginPosition = this.position === 'left' ? 'margin-right' : 'margin-left';
    this.renderer.setElementStyle(this.newCheckbox, marginPosition, '10px');
  }

  // if use input itself as host, then mouseenter/leave event won't emit because of display:none
  @HostListener('mouseenter') onMouseEnter() {
    if (!this.oldCheckbox.checked) {
      this.renderer.setElementStyle(this.newCheckbox, 'border', 'solid 1px #0272B6');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this.oldCheckbox.checked) {
      this.renderer.setElementStyle(this.newCheckbox, 'border', 'solid 1px #B1B9BF');
    }
  }

  @HostListener('click') onClick() {
    if (this.oldCheckbox.checked) {
      this.renderer.setElementStyle(this.newCheckbox, 'background', `url('assets/icons/checkbox-active-24.svg') top no-repeat`);
      this.renderer.setElementStyle(this.newCheckbox, 'background-size', '110%');
      this.renderer.setElementStyle(this.newCheckbox, 'border', 'solid 1px transparent');
    } else {
      this.renderer.setElementStyle(this.newCheckbox, 'background', '#FBFCFC');
      this.renderer.setElementStyle(this.newCheckbox, 'border', 'solid 1px #B1B9BF');
    }
  }
}
