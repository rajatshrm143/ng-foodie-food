import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailShowComponent } from '../detail-show/detail-show.component';

@Component({
  selector: 'app-list-show',
  templateUrl: './list-show.component.html',
  styleUrls: ['./list-show.component.css']
})
export class ListShowComponent implements OnInit {

  @ViewChild(DetailShowComponent) childComp: any;

  constructor() { }

  ngOnInit(): void {
  }

  plus() {
    this.childComp.plusOne();
  }
  minus() {
    this.childComp.minusOne();
  }

}
