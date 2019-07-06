import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: any;
  names: any;

  addNewQuote(quote) {
    let nameLength = this.names.length;
    let quoteLength = this.quotes.length;
    quote.newDate = new Date(quote.newDate)
    this.quotes.push(quote)

  }


  constructor() { }

  ngOnInit() {
  }

}
