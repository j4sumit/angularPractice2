import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>
    {{"welcome"+ name}} 
  </h1>
  <button (click)="onClick()">Submit</button>
  {{greeting}}
  <button (click)="onClick1($event)">Submit1</button>
  {{eventtype}}

  <button (click)="greeting='Welcome using new method type'">Submit1</button>//new type of method
  <!-- for multiple style -->
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
greeting=""
eventtype=""

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.greeting="Sumit Chaurasiya"
    }
    onClick1(event:any) {
      console.log(event)
      this.eventtype=event.type
      }
}