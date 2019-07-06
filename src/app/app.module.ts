import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { VoterDirective } from './voter.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesFormComponent,
    QuotesDetailsComponent,
    VoterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
