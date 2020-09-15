import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeRulesComponent } from './employee-rules.component'


const route: Routes = [{
  path: '',
  component: EmployeeRulesComponent,
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
export class EmployeeRulesModule { }
