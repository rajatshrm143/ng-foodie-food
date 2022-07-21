import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

@Injectable({
  providedIn: 'root'
})
export class DoServiceService {

  title = "My Angular App "
  bookURL = '/api/books';

  constructor(private http: HttpClient) { }

  // using Observable with Book type data set 
  // that returns the API response made with Angular-in-memory-web-api

  getBooksFromStore() {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=1`);
  }

  getForkJoinData() {
    return forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        users: ajax.getJSON('https://api.github.com/users')
      }
    ) // { google: object, microsoft: object, users: array }
  }


  // to test AuthGuard
  dummyLogin() {
    return false;
  }

  mySum() {
    return "Go go go!";
  }
}
