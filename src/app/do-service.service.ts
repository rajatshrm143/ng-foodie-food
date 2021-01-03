import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

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

  // to test AuthGuard
  dummyLogin() {
    return false;
  }

  mySum() {
    return "Go go go!";
  }
}
