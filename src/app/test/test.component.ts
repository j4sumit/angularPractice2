import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <input type="text"  placeholder="Enter Text" [(ngModel)]="name">
  {{name}}
  `,
  styles: []
})
export class TestComponent implements OnInit {

  name= ""; 
  constructor() { }

  ngOnInit(): void {
  }
  logMessage(data:any){
console.log(data);
  }
}