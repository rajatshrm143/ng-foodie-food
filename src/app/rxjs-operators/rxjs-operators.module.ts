import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsOperatorsComponent } from './rxjs-operators.component';
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';

const route: Routes = [{ path: '', component: RxjsOperatorsComponent }];

@NgModule({
  declarations: [RxjsOperatorsComponent],
  imports: [
    CommonModule, RouterModule.forChild(route), MatButtonModule
  ],
  exports: [RouterModule]
})
export class RxjsOperatorsModule { }
