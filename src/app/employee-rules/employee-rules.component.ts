import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { DoServiceService } from '../do-service.service';

@Component({
  selector: 'app-employee-rules',
  templateUrl: './employee-rules.component.html',
  styleUrls: ['./employee-rules.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeRulesComponent implements OnInit {
  softBook: Observable<any>;
  forkArray: any;

  constructor(private serv: DoServiceService) {
    console.log('This is EMP-rules Module');
  }

  ngOnInit(): void {
    this.getSoftBooks();
    this.getForkJoinData();
  }

  getSoftBooks() {
    setTimeout(() => {
      this.softBook = this.serv.getBooksFromStore();
      console.log(this.softBook)
    }, 5000);

  }

  getForkJoinData() {

    this.forkArray = this.serv.getForkJoinData();
    console.log(this.forkArray)

  }

}
