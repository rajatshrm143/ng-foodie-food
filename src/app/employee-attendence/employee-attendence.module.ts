import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAttendenceComponent } from './employee-attendence.component';

const route: Routes = [{
  path: '',
  component: EmployeeAttendenceComponent,
  // children : [{
  //   path : 'exp-employees',
  //   component : ExpEmployeesComponent
  // }]
}]

@NgModule({
  imports: [RouterModule, CommonModule],
  exports: [],
  declarations: [],
})
export class EmployeeAttendenceModule { }
