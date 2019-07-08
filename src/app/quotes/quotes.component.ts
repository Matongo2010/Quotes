import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes = [
  {id:1, quote:'If you have the right vision, and you take the right steps, then success is inevitable'},
  {id:2, quote:'None but ourselves can free our minds'},
  {id:3, quote:'One good thing about music, when it hits you, you feel no pain'},
  ];
 

  }


  constructor() { 
    this.quotes = ['If you have the right vision, and you take the right steps, then success is inevitable', 'None but ourselves can free our minds', 'One good thing about music, when it hits you, you feel no pain'

    
    

  ngOnInit() {
  }

  addNewQuote(quote) {
    let nameLength = this.names.length;
    let quoteLength = this.quotes.length;
    quote.newDate = new Date(quote.newDate)
    this.quotes.push(quote)

}
