import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  display="none";
  caption;
  backimage;
  image;
  author;
  mode=false;
  card=[{}]
  i=0;

  username;

  constructor(private dservice:DataserviceService) { }

  ngOnInit() {
    this.username = this.dservice.user;
  }

  openModal(){
    this.display="block";
  }

  onCloseHandled(){

    this.display ="none";
  }

  add(){
    this.dservice.addCard(this.caption,this.author,this.image,this.backimage);
    this.card[this.i]= this.dservice.cardarray;
    this.i++;
    this.display = "none";
    this.mode=true;
  }
}
