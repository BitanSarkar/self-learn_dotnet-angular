import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExtrasModule } from '../extras/extras.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false
  users:any;
  constructor(private http:HttpClient, private extra:ExtrasModule){ }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event:boolean) {
    this.registerMode = event;
  }
}
