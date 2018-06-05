import { Component, OnInit } from '@angular/core';
import { FlagServieService } from '../flag-servie.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css','../../../node_modules/flag-icon-css/css/flag-icon.css']
})
export class FlagComponent implements OnInit {
  
  randomNationName;
  randomNationISOCode;
  myGuess;
  playing=false;
 a= [];
  canswer;
  score=0;
  correctPosition;
  yes=false;
  no=false;


  constructor(private cService: FlagServieService) { }

  ngOnInit() {
  }

 

  next(){

    let countries = this.cService.getCountries();
    let random = Math.floor(Math.random()*countries.length);
    this.canswer= this.randomNationName = countries[random].name;
    this.randomNationISOCode = countries[random]['alpha-2']
 
    
    console.log(this.randomNationISOCode,this.randomNationName)


    this.correctPosition =Math.floor(4*Math.random());
    this.a[this.correctPosition] = this.canswer;

    for(let i=0;i<4;i++){

      if(i==this.correctPosition)
      continue;

      else{

        let wanswer;

        do   
        {
         
        let countrie = this.cService.getCountries();
        let ran = Math.floor(Math.random()*countrie.length);
         wanswer= this.randomNationName = countries[ran].name;
       }while(this.a.indexOf(wanswer)>-1);


              this.a[i] = wanswer;
      }
    }

  

    this.myGuess = "";
    this.playing=true;
    }






    onFinished(){
      this.playing=false;
      
      alert("Ooops Timeout Your score is "+ this.score);
      location.reload();
    }
    onReset(){
      this.playing=false;
      location.reload();

    }

    check(aa){
     
     
      if(aa==this.canswer){
        
        this.yes=true;
        this.no=false;
        
        this.score++;
        this.next();
       
      
      }
      else{
       
        this.no=true;
        this.yes=false;
        
      }

    }

    onCorrect(){
      this.yes=false;

    }
    onWrong(){
      this.no=false;

    }
}
