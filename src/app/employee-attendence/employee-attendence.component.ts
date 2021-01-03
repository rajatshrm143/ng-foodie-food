import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee-attendence',
  templateUrl: './employee-attendence.component.html',
  styleUrls: ['./employee-attendence.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeAttendenceComponent implements OnInit {

  constructor() {
    console.log('This is EMP-attendence Module');
  }

  ngOnInit(): void {
  }

}
