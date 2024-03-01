import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoader]'
})
export class LoaderDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.elementRef.nativeElement.style.display = 'none';
    }, 500);
  }

}
