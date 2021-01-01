import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoServiceService } from '../do-service.service';

@Component({
  selector: 'app-employee-rules',
  templateUrl: './employee-rules.component.html',
  styleUrls: ['./employee-rules.component.css']
})
export class EmployeeRulesComponent implements OnInit {
  softBook: Observable<any>;

  constructor(private serv: DoServiceService) {
    console.log('This is EMP-rules Module');
  }

  ngOnInit(): void {
    this.getSoftBooks();
  }

  getSoftBooks() {
    setTimeout(() => {
      this.softBook = this.serv.getBooksFromStore();
      console.log(this.softBook)
    }, 5000);

  }

}
