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

  constructor(private cService: FlagServieService) { }

  ngOnInit() {
  }

  getCountries(){
    return ;
  }

  next(){
    let countries = this.cService.getCountries();
    let random = Math.floor(Math.random()*countries.length);
    this.randomNationName = countries[random].name;
    this.randomNationISOCode = countries[random]['alpha-2']
    console.log(this.randomNationISOCode,this.randomNationName)
    this.myGuess = "";
    this.playing=true;
    }
    onFinished(){
      this.playing=false;
      
      alert("Ooops Timeout");
    }
    onReset(){
      this.playing=false;
      location.reload();

    }

}
