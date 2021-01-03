import { Component, OnInit, VERSION, ViewEncapsulation } from '@angular/core';

class MyColorClass {
  myColor: string;
  showColor(sendColor: string) {
    this.myColor = sendColor;
  }
}

class MyNameClass {
  myName: string;
  showMyname(sendName: string) {
    this.myName = sendName;
  }

}

@Component({
  selector: 'app-component-decor',
  templateUrl: './component-decor.component.html',
  styleUrls: ['./component-decor.component.css'],
  preserveWhitespaces: true, // will remove white spaces from HTML, if false
  viewProviders: [MyColorClass, MyNameClass], // mentioned outside classes here to use their methods
  encapsulation: ViewEncapsulation.None
})
export class ComponentDecorComponent implements OnInit {

  name: string;
  color: string;

  constructor(private colorObj: MyColorClass, private nameObj: MyNameClass) { }

  ngOnInit(): void {
    // Interacting with member & properties of other classes WHO 'viewProviders'*****
    this.colorObj.showColor('green');
    this.nameObj.showMyname('Rajat Sharma');

    this.name = this.nameObj.myName;
    this.color = this.colorObj.myColor;
    // ******************************************************************************
  }

}
