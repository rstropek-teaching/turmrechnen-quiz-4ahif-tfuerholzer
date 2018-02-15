import { Component } from '@angular/core';
import {current} from 'codelyzer/util/syntaxKind';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public results: Array<string> = [];
  public startingValue = 5;
  public heightValue = 9;

  public calculate() {
    this.results=[];
    this.calculateMultiply(this.startingValue,2);
  }
  calculateMultiply(startValue, currentMutliply){
    const result = startValue * currentMutliply;
    this.results.push(`${startValue} * ${currentMutliply} = ${result}`);
    if(currentMutliply === this.heightValue){
      this.calculateDivision(result,2);
    }else{
      this.calculateMultiply(result,currentMutliply+1);
    }
  }
  calculateDivision(startValue,currentDivisor){
    console.log(currentDivisor);
    const result = startValue / currentDivisor;
    this.results.push(`${startValue} / ${currentDivisor} = ${result}`);
    if(currentDivisor < this.heightValue) {
      this.calculateDivision(result, currentDivisor + 1);
    }
  }

}
