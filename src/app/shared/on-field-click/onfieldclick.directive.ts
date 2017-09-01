
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})

export class HighlightDirective {
  
  constructor(private el: ElementRef) {}
  
  @Input('myHighlight') highlightColor: string;
  
  @HostListener('click') onMouseClick() {
    alert(this.el.nativeElement.style.backgroundColor);
    alert(this.highlightColor);
  }
  
//  @HostListener('mouseenter') onMouseEnter() {
//    this.highlight('yellow');
//  }
//  
//  @HostListener('mouseleave') onMouseLeaver() {
//    this.highlight(null);
//  }
//  
//  private highlight(color: string) {
//    this.el.nativeElement.style.backgroundColor = color;
//  }
}