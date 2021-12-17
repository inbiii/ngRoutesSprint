import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSpan]'
})
export class SpanDirective {
  private htmlElement: HTMLElement;
  constructor(element: ElementRef) {
    this.htmlElement = element.nativeElement;
    this.htmlElement.style.fontSize = '90%';
    this.htmlElement.style.fontWeight = '700';

  }
}
