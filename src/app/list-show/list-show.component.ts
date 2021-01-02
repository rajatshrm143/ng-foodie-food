import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DetailShowComponent } from '../detail-show/detail-show.component';
import { DetailShowDirective } from '../detail-show/detail-show.directive';

@Component({
  selector: 'app-list-show',
  templateUrl: './list-show.component.html',
  styleUrls: ['./list-show.component.css']
})
export class ListShowComponent implements OnInit, AfterViewInit {

  @ViewChild(DetailShowComponent) childComp: any; // child component
  @ViewChild(DetailShowDirective) childDirective: any; // child directive

  @ViewChild('fullname') elemFname: ElementRef; // 'fullname' template ref variable
  @ViewChild('address') elemAddr: ElementRef; //  'address' template ref variable

  constructor() { }

  ngOnInit(): void {
  }

  // 'plus()' & 'minus()' are used for @ViewChild() component *******************
  plus() {
    this.childComp.plusOne();
  }
  minus() {
    this.childComp.minusOne();
  }
  // *****************************************************************************

  // 'changeClr()' is used for @ViewChild() directive ****************************
  changeClr(color: string) {
    this.childDirective.changeColor(color);
  }
  // *****************************************************************************

  // 'ngAfterViewInit()' is used for @ViewChild() template reference variable ****
  ngAfterViewInit() {
    this.elemFname.nativeElement.style.backgroundColor = 'black'
    this.elemFname.nativeElement.style.color = 'white'
    this.elemAddr.nativeElement.style.backgroundColor = 'cyan'
    this.elemAddr.nativeElement.style.color = 'red'
  }
  // ******************************************************************************

}
