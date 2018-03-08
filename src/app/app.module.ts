import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';
import { AppRoutingModule }           from './app-routing.module';
import { AppComponent }               from './app.component';
import { CalculationComponent }       from './calculation/calculation.component';
import { FormsModule }                from '@angular/forms';
import { CalculationService}          from '../app/Shared/DataServices/CalculationService';
import { MinValidatorDirective }      from '../app/Shared/Directives/min.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalculationComponent,
    MinValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
