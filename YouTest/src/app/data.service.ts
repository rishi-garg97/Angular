import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   List=[
    {name:"washing machine",category:"Electronics",rate:10000,rating:3},
    {name:"Sneakers",category:"Shoes",rate:10000,rating:4},
    {name:"Shirt",category:"Clothing",rate:10000,rating:5},
    {name:"Television",category:"Electronics",rate:10000,rating:3},
    {name:"Leather",category:"Shoes",rate:10000,rating:2},
    {name:"Refrigerator",category:"Electronics",rate:10000,rating:1}];


    UserList = [];


  constructor() { }

  listValue(){
    return this.List;
  }


  
}
