import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHeadtwo]'
})
export class HeadtwoDirective {
  private htmlElement: HTMLElement;
  constructor(element: ElementRef) {
    this.htmlElement = element.nativeElement;
    this.htmlElement.style.backgroundColor = 'darkslategray';
    this.htmlElement.style.color = 'white';
    this.htmlElement.style.padding = '5px';
    this.htmlElement.style.fontSize = '20px';
  }

  @Input() appHeadtwo = '';
  @HostListener('mouseEnter') clicked() {
    // if (this.htmlElement.style.backgroundColor === 'darkslategray') {
    this.htmlElement.style.backgroundColor = 'darkgray';
    // }
    // if (this.htmlElement.style.backgroundColor === 'darkgray') {
    // this.htmlElement.style.backgroundColor = 'darkslategray';
    // }
  }
}
