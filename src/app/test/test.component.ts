import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
<h1>{{receivedData}}</h1>
  `,
  styles: [],
})

export class TestComponent implements OnInit {

// @Input() public parentData: any;
@Input('parentData') public receivedData: any;

  constructor() {}

  ngOnInit(): void {}
  logMessage(data: any) {
    console.log(data);
  }
}