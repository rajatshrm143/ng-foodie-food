// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from "@angular/router";

import { EmployeeAttendenceModule } from './employee-attendence/employee-attendence.module';
import { EmployeeRulesModule } from './employee-rules/employee-rules.module';
import { EmpDetailsModule } from './emp-details/emp-details.module';
import { DoServiceService } from './do-service.service';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from "@angular/common/http"
// import { InMemoryWebApiModule } from "angular-in-memory-web-api"
// import { TestData } from "./testdata";
// import { Book } from "./book";
import { MyguardGuard } from "./myguard.guard";

// These components have the implementation of Auxiliary routes & Named Router outlets
import { ListShowComponent } from './list-show/list-show.component';
import { DetailShowComponent } from './detail-show/detail-show.component';
import { DetailShowDirective } from './detail-show/detail-show.directive';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { ComponentDecorComponent } from './component-decor/component-decor.component';


const routes: Routes = [
  //  whenever we hit "localhost:4200" it will redirct to "do-login" path
  { path: '', redirectTo: 'routing-jquery', pathMatch: 'full' }, // for default route at first application load

  // defining the route to load which component
  { path: 'routing-jquery', component: LoginComponent },

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
    path: 'mat-form',
    // loadChildren: 'app/emp-details/emp-details.module#EmpDetailsModule'
    loadChildren: () => import('./emp-details/emp-details.module').then(m => EmpDetailsModule)
  },
  {
    path: 'auth-guard',
    // loadChildren: 'app/employee-attendence/employee-attendence.module#EmployeeAttendenceModule'
    loadChildren: () => import('./employee-attendence/employee-attendence.module').then(m => EmployeeAttendenceModule),
    canActivate: [MyguardGuard] // applied "canActivate" authGuard
  },
  {
    path: 'web-api',
    // loadChildren: 'app/employee-rules/employee-rules.module#EmployeeRulesModule'
    loadChildren: () => import('./employee-rules/employee-rules.module').then(m => EmployeeRulesModule),
    canDeactivate: [MyguardGuard]  // applied "canDeactivate" authGuard
  },
  { path: 'view-child', component: ListShowComponent },
  { path: 'host-listener', component: HostListenerComponent },
  { path: 'component-decor', component: ComponentDecorComponent },

  //wildcard route - if any path does not match with above paths
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ListShowComponent,
    DetailShowComponent,
    DetailShowDirective,
    HostListenerComponent,
    ComponentDecorComponent
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    RouterModule.forRoot(routes),

    ReactiveFormsModule, // for building model driven forms/ reactive forms

    MatButtonModule,

    HttpClientModule, // Http client module import to work in service
    // InMemoryWebApiModule.forRoot(TestData) // to use angular-in-memory-web-api
  ],
  // We use exports so that we can use it in anyother component when needed
  exports: [RouterModule],

  providers: [DoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
