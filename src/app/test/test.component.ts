import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>
    {{"welcome"+ name}} 
  </h1>
  <h2 [style.color]="'green'">Practiced to success in Accenture</h2>
  <h2 [style.color]='hasError? "red" : "green"'>Practiced to success in Accenture1</h2>
  <h2 [style.color]="highlightColor">Practiced to success in Accenture2</h2>
  <!-- for multiple style -->
  <h2 [ngStyle]="titleStyle">Practiced to success in Accenture3</h2>  
  `,
  styles: []
})
export class TestComponent implements OnInit {
name ="Amit Chaurasiya"
hasError= false;
isSpecial=true;
highlightColor="blue";
titleStyle={
  color:"red",
  fontStyle:"italic"
}
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello" +this.name
  }
}
