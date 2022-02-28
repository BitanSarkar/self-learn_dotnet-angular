import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ExtrasModule } from '../../extras/extras.module';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {

  validationErrors: string[]  = [];
  constructor(private http: HttpClient, private extraModule: ExtrasModule) { }

  ngOnInit(): void {
  }

  get400Error() {
    this.http.get(`${this.extraModule.baseUrl}/buggy/bad-request`).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get401Error() {
    this.http.get(`${this.extraModule.baseUrl}/buggy/auth`).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get400Validation() {
    this.http.post(`${this.extraModule.baseUrl}/account/register`,{}).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    });
  }

  get500Error() {
    this.http.get(`${this.extraModule.baseUrl}/buggy/server-error`).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get404Error() {
    this.http.get(`${this.extraModule.baseUrl}/buggy/not-found`).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
