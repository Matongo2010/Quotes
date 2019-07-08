import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
  new Quotes(1, 'If you have the right vision, and you take the right steps, then success is inevitable', 'Bob Collymore', new Date(2019,5,6)),
  new Quotes(2, 'None but ourselves can free our minds','Bob Marley',new Date(2019,3,6)),
  new Quotes(3, 'One good thing about music, when it hits you, you feel no pain', 'Bob Marley',new Date(2019,7,2)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
   }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
      this.quotes.splice(index,1);
    }
  }

}
  
  constructor() { }

  ngOnInit() {
  }

}



