import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  constructor(private dservice:DataserviceService) { }

  ngOnInit() {
    this.dservice.user =this.username;
  
  }

}
