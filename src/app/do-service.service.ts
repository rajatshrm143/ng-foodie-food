import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
// import { TestData } from "./testdata";
import { Book } from "./book";

@Injectable({
  providedIn: 'root'
})
export class DoServiceService {

  title = "My Angular App for employee management!"
  bookURL = '/api/books';

  constructor(private http: HttpClient) { }

  // using Observable with Book type data set 
  // that returns the API response made with Angular-in-memory-web-api

  getBooksFromStore() {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=1`);
  }


  // getBooksFromStore(): Observable<any> {
  //   return new Observable((observer) => {
  //     setTimeout(() => {
  //       observer.next([
  //         {
  //           serial: 1,
  //           bookname: 'One Indian Girl'
  //         },
  //         {
  //           serial: 2,
  //           bookname: 'LOOSER'
  //         },
  //         {
  //           serial: 3,
  //           bookname: 'Rich Dad Poor Dad'
  //         },
  //         {
  //           serial: 4,
  //           bookname: 'Wings of Fire'
  //         },
  //         {
  //           serial: 5,
  //           bookname: 'Two States'
  //         },
  //         {
  //           serial: 6,
  //           bookname: 'The Alchemist'
  //         },
  //         {
  //           serial: 7,
  //           bookname: 'Death'
  //         },
  //       ]);
  //     }, 2000);
  //   })


  // }



  mySum() {
    return "Go go go!";
  }
}
