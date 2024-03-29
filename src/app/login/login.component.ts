import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DoServiceService } from '../do-service.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from "jquery";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DoServiceService], // this is component level service injection
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  title: string;
  desc: string;

  loginForm: FormGroup; // for making form group

  constructor(private serv: DoServiceService, private frmBuild: FormBuilder,
    private cookie: CookieService) {

    console.log('This is login module');

    this.loginForm = this.frmBuild.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      mobileNum: ['']
    })

  }

  ngOnInit(): void {
    this.desc = this.serv.mySum();
    this.title = this.serv.title;

    // Enables jQuery here !!
    $(document).ready(function () {
      $("#magic").click(function () {
        window.alert("See the magic of jQuery!");
      })
    })

    this.cookie.set("userId", "Rajat Sharma");
    this.cookie.set("userType", "Special Permissions, Enjoy!");

    console.log(this.cookie.getAll());


  }

  save(data: any) {
    console.log(data.controls.email.value);
    console.log(data.controls.password.value);
    console.log(data.controls.mobileNum.value);
  }

}
