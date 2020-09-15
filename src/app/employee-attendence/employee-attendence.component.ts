import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-attendence',
  templateUrl: './employee-attendence.component.html',
  styleUrls: ['./employee-attendence.component.css']
})
export class EmployeeAttendenceComponent implements OnInit {

  constructor() {
    console.log('This is EMP-attendence Module');
  }

  ngOnInit(): void {
  }

}
