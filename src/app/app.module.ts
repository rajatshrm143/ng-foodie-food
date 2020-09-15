import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { EmployeeRulesComponent } from './employee-rules/employee-rules.component';
// import { EmployeeAttendenceComponent } from './employee-attendence/employee-attendence.component';
import { RouterModule, Routes } from "@angular/router";

// Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { EmployeeAttendenceModule } from './employee-attendence/employee-attendence.module';
import { EmployeeRulesModule } from './employee-rules/employee-rules.module';
import { EmpDetailsModule } from './emp-details/emp-details.module';
import { DoServiceService } from './do-service.service';



const routes: Routes = [
  //  whenever we hit "localhost:4200" it will redirct to "do-login" path
  { path: '', redirectTo: 'do-login', pathMatch: 'full' }, // for default route at first application load

  // defining the route to load which component
  { path: 'do-login', component: LoginComponent },

  // ******** This part is only for learning purpose, will not be working now because they are modules now
  // defining child/minor routes of a parent/major component
  // {
  //   path: 'employee-list',
  //   children: [
  //     { path: '', component: EmpDetailsComponent }, // for '/employee-list'
  //     { path: 'emp-rules', component: EmployeeRulesComponent }, // for '/employee-list/emp-rules'
  //     { path: 'emp-attendence', component: EmployeeAttendenceComponent } // for '/employee-list/emp-attendence'
  //   ]
  // },

  // Applying Lazy-loading here, to load the sub-modules only on demand
  {
    path: 'details',
    // loadChildren: 'app/emp-details/emp-details.module#EmpDetailsModule'
    loadChildren: () => import('./emp-details/emp-details.module').then(m => EmpDetailsModule)
  },
  {
    path: 'attendence',
    // loadChildren: 'app/employee-attendence/employee-attendence.module#EmployeeAttendenceModule'
    loadChildren: () => import('./employee-attendence/employee-attendence.module').then(m => EmployeeAttendenceModule)
  },
  {
    path: 'rules',
    // loadChildren: 'app/employee-rules/employee-rules.module#EmployeeRulesModule'
    loadChildren: () => import('./employee-rules/employee-rules.module').then(m => EmployeeRulesModule)
  },

  //wildcard route - if any path does not match with above paths
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // EmpDetailsComponent,
    PageNotFoundComponent,
    // EmployeeRulesComponent,
    // EmployeeAttendenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule, // for building model driven forms/ reactive forms
    EmpDetailsModule,
    EmployeeAttendenceModule,
    EmployeeRulesModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,

  ],
  // We use exports so that we can use it in anyother component when needed
  exports: [
    MatButtonModule,
    MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    EmpDetailsModule,
    EmployeeAttendenceModule,
    EmployeeRulesModule
  ],

  providers: [DoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
