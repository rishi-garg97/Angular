import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {

 
  constructor(public dservice:DataService) { }

  List1=[];
  ulist=[];

  ngOnInit() {
    this.List1 = this.dservice.List;
    // console.log(this.List1);
    // console.log(this.dservice.List);
  }
  userList(i){
    console.log(i);
    console.log(this.List1[i]);
    this.ulist.push(this.List1[i]);
    console.log(this.ulist);
    this.dservice.UserList =this.ulist;
    console.log("r"+this.ulist);
    
  }

}
