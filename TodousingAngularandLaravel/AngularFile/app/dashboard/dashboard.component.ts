import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginservice : LoginService) { }

  ngOnInit(): void {
    // const name = this.loginservice.;
  }


}
