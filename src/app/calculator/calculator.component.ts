import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public number1:number=0;
  public number2:number=0;
  public results:number=0;
  sum(){
    this.results=this.number1+this.number2;
    
  }
  sub(){
    this.results=this.number1-this.number2;
  }
  mul(){
    this.results=this.number1*this.number2;
  }
  div(){
    this.results=this.number1/this.number2;
  }

}
