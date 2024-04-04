import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>
    {{"welcome"+ name}} 
  </p>
  <input type="text" #myInput placeholder="Enter Text">
  <button (click)="logMessage(myInput)" >Log</button>
  <button (click)="logMessage(myInput.value)" >LogValue</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

name ="Amit Chaurasiya"
  constructor() { }

  ngOnInit(): void {
  }
  logMessage(data:any){
console.log(data);
  }
}