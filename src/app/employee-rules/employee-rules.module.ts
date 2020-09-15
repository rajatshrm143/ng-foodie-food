import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeRulesComponent } from './employee-rules.component'


const routes: Routes = [{
  path: '',
  component: EmployeeRulesComponent,
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
export class EmployeeRulesModule { }
