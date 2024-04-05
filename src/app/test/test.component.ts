import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
<h1>{{receivedData}}</h1>
<button (click)="firstEvent()">ChildToParentData</button>
  `,
  styles: [],
})

export class TestComponent implements OnInit {

// @Input() public parentData: any;
@Input('parentData') public receivedData: any;

@Output() childEvent = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}
  // logMessage(data: any) {
  //   console.log(data);
  // }
  firstEvent(){
    this.childEvent.emit("Data Received from Child")
  }

}