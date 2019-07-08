import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
  new Quotes(1, 'If you have the right vision, and you take the right steps, then success is inevitable', 'Bob Collymore'),
  new Quotes(2, 'None but ourselves can free our minds','Bob Marley'),
  new Quotes(3, 'One good thing about music, when it hits you, you feel no pain', 'Bob Marley'),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuotes(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}