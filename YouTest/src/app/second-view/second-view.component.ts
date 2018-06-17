import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';


@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css']
})
export class SecondViewComponent implements OnInit {

  slist=[];
  
  quan=10;
  constructor(private dservice : DataService) { }

  ngOnInit() {
    this.slist = this.dservice.UserList;
  }

  

}
