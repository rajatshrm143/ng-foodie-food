import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { UnitTestingComponent } from './unit-testing.component';

const routes: Routes = [{ path: '', component: UnitTestingComponent }]

@NgModule({
  declarations: [UnitTestingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UnitTestingModule { }
