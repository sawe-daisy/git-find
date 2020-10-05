import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrike]'
})
export class StrikeDirective {

  constructor(private elem: ElementRef, private render: Renderer2) {}

  setColor(color: string){
    this.render.setStyle(
      this.elem.nativeElement, 'backgroundColor', color
    );
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.setColor('blue');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setColor('white');
  }

}
