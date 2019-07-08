import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
  {id:1, name:'If you have the right vision, and you take the right steps, then success is inevitable', description:'Bob Collymore'},
  {id:2, name:'None but ourselves can free our minds', description:'Bob Marley'},
  {id:3, name:'One good thing about music, when it hits you, you feel no pain', description:'Bob Marley'},
  ];
 

  
  constructor() { }

  ngOnInit() {
  }

}