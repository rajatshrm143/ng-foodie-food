import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RxjsOperatorsComponent implements OnInit {

  // Describe features___________________________________________________________

  // 1.1 Promises [JS] - to achieve async approach of JS, using custom promises 
  // - create custom promises & process data on the basis of user selection

  // 1.2 fromEvent [RxJs] - to achieve observable data stream using fromEvent operator
  // - create 


  // _______________________________________________________________________________






  // 1.1 Promises___________________
  isDellAvailable: boolean = true;
  isHPAvailable: boolean = true;
  laptopBuy: any;
  statuscolor: any;
  //___________________________________

  constructor() { }

  ngOnInit() {
  }

  // 1.1 Promises___________________________________________
  runPromise() {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.isHPAvailable) {
        return setTimeout(() => {
          return resolve({ status: true, model: 'HP', price: 'INR 40,000' });
        }, 3000)
      }
      else if (this.isDellAvailable) {
        return setTimeout(() => {
          return resolve({ status: true, model: 'Dell', price: 'INR 55,000' });
        }, 3000)
      }
      else {
        return setTimeout(() => {
          return reject({ status: false, model: 'None', price: 'INR 0' });
        }, 3000)
      }
    })

    buyLaptop.then(resp => {
      this.laptopBuy = resp;
      this.statuscolor = 'green';
    }).catch(resp => {
      this.laptopBuy = resp;
      this.statuscolor = 'red';
    })

  }

  toggleHP() {
    this.isHPAvailable = !this.isHPAvailable;
    console.log(this.isHPAvailable)
  }

  toggleDell() {
    this.isDellAvailable = !this.isDellAvailable;
    console.log(this.isDellAvailable)
  }
  // 1.1___________________________________________________________

}
