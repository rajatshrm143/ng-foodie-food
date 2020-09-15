import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoServiceService {

  title = "My Angular App for employee management!"
  constructor() { }

  mySum() {
    return "Go go go!";
  }
}
