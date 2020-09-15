import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAttendenceComponent } from './employee-attendence.component';

const routes: Routes = [{
  path: '',
  component: EmployeeAttendenceComponent,
  // children : [{
  //   path : 'exp-employees',
  //   component : ExpEmployeesComponent
  // }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class EmployeeAttendenceModule { }
