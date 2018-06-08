import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  i=0;
  cardarray = [{}];
  user;
 

  constructor() { 
    console.log(this.user);

  }

  addCard(caption,author,image,backimage){
    this.cardarray[this.i] = {caption:caption,author:author,image:image,backimage:backimage};
    this.i++;

  }
}
