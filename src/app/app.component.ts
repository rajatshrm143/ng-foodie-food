import { Component } from '@angular/core';
import { DoServiceService } from "./do-service.service"
// import { Book } from './book';
import { Observable, Observer } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Search';
  softBook: Observable<any>;

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 3000);
  });


  constructor(private serv: DoServiceService) {
    console.log('This is Main App module');
    console.log(this.time)
    this.getSoftBooks();
  }

  ngOnInIt() {
  }

  getSoftBooks() {
    setTimeout(() => {
      this.softBook = this.serv.getBooksFromStore();
      console.log(this.softBook)
    }, 5000);

  }
}
