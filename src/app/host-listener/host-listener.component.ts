import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent implements OnInit {

  constructor(private render: Renderer2, private elem: ElementRef) { }

  ngOnInit(): void {
  }

  // @HostListener() only supports window, document, and body as global event targets, otherwise it only supports the components host element.

  @HostListener('click') clickedMe() {
    alert('Why did you clicked me, dude?');
  }

  @HostListener('mouseover') mouseOverMe() {
    // alert('Why did you clicked me, dude?');
    this.render.setStyle(this.elem.nativeElement, 'color', 'red');

  }
  @HostListener('mouseleave') mouseLeaveMe() {
    // alert('Why did you clicked me, dude?');
    this.render.setStyle(this.elem.nativeElement, 'color', 'black');

  }

}
