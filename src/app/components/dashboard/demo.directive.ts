import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDemo]',
})
export class DemoDirective implements OnInit {
  @Input() bgColor: string | undefined;
  @Input() color: string | undefined;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.background = this.bgColor;
    this.elementRef.nativeElement.style.color = this.color;
    console.log('Directivedddddddddddddddddd', this.bgColor);
  }

  @HostListener ('mouseenter')
  mouseEnter() {
    this.elementRef.nativeElement.style.background = 'green';
  }

  @HostListener ('mouseleave')
  mouseleave() {
    this.elementRef.nativeElement.style.background = this.bgColor;
  }
}
