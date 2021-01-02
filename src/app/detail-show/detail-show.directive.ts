import { Directive, ElementRef, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[appDetailShow]'
})
export class DetailShowDirective implements AfterViewInit {

  constructor(private elemRef: ElementRef) { }

  ngAfterViewInit() {
    this.elemRef.nativeElement.style.color = 'red'; // by default color will be 'red
  }

  changeColor(color: string) {
    this.elemRef.nativeElement.style.color = color; // color changes as passed from parent component
  }

}
