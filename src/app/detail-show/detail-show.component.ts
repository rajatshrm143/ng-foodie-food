import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-detail-show',
  templateUrl: './detail-show.component.html',
  styleUrls: ['./detail-show.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailShowComponent implements OnInit {
  mycount: number = 0;
  message: string = '';
  constructor() { }

  ngOnInit(): void {
    this.message = "Counter is , now:" + this.mycount;
  }

  plusOne() {
    this.mycount = this.mycount + 1;
    this.message = "Counter is increased, now:" + this.mycount;
  }
  minusOne() {
    this.mycount = this.mycount - 1;
    this.message = "Counter is decreased, now:" + this.mycount;
  }

}
