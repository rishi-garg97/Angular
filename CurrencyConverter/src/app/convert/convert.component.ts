import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  url="https://exchangeratesapi.io/api/latest?base=";
  currency;
  
  i1; node
i2;


  unit1;
  unit2;

  constructor(private http:HttpClient) { }

  ngOnInit() {

   
    this.http.get(this.url).subscribe(data=>{


     this.currency =Object.keys(data.rates);
   
    });

  }
  
  

  cal1(){
    
    
 
    this.http.get(this.url+this.unit2).subscribe(data1=>{
 
      
     this.i1 = data1.rates[this.unit1]*this.i2;
     
     });

     

     
    
  }
  cal2(){
    

    this.http.get(this.url+this.unit1).subscribe(data2=>{

      
      this.i2 = data2.rates[this.unit2]*this.i1;

      });
   
    
  }

  

}