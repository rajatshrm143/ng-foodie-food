import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoServiceService } from './do-service.service';
import { EmployeeRulesComponent } from './employee-rules/employee-rules.component';

@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate, CanActivateChild, CanDeactivate<EmployeeRulesComponent>, CanLoad {

  constructor(private serv: DoServiceService, private route: Router) { }

  // validate route navigation before redirection to any component*****
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.serv.dummyLogin()) {
      return true;
    }
    else {
      alert("You are not authorised to view this page!");
      this.route.navigate(['']);
      return false;
    }
  }
  // ********************************************************************

  // ask before leaving the particular component*********************
  canDeactivate(): boolean {
    if (window.confirm("Are you sure you want to leave this page?")) {
      return true;
    }
    else {
      return false;
    }
  }
  // *****************************************************************

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }




  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
