import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-testing',
  templateUrl: './unit-testing.component.html',
  styleUrls: ['./unit-testing.component.css']
})
export class UnitTestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  additionFunc(num1: number, num2: number) {
    return num1 + num2;
  }

}
