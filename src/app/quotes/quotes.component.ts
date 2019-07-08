import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  goals:string[];
 

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
