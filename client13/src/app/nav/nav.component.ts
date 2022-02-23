import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  model:any = {}
  user:User;
  
  constructor(public accountService: AccountService) { }
  
  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(response => this.user = response)
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      // console.log(response);
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
  }

  
}
