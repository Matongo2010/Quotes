import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  

  @Input() quote:Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  like=0;
 dislike=0;

 clickLike(){
   this.like=this.like+=1;
 }
 clickUnlike(){
   this.dislike=this.dislike+=1;
 }

  constructor() { }

  ngOnInit() {
  }

  
}


