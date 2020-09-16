import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmpDetailsComponent } from "./emp-details.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


const routes: Routes = [{
  path: '',
  component: EmpDetailsComponent,
  // children : [{
  //   path : 'exp-employees',
  //   component : ExpEmployeesComponent
  // }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule, FormsModule,
    MatButtonModule,
    MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,

  ],
  declarations: [EmpDetailsComponent],

})
export class EmpDetailsModule {


}
