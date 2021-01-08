import { Component, VERSION } from '@angular/core';
import { DoServiceService } from "./do-service.service"
// import { Book } from './book';
import { Observable, Observer } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Search';
  ngVersion: string = 'Angular ' + VERSION.full;

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 3000);
  });


  constructor(private serv: DoServiceService, private cookie: CookieService) {
    console.log('This is Main App module');

  }

  ngOnInIt() {


  }

}
