import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
<div [ngSwitch]="color" >
<div *ngSwitchCase="'red'">yor have choosed Red</div>
<div *ngSwitchCase="'green'">yor have choosed Green</div>
<div *ngSwitchCase="'yellow'">yor have choosed Yellow</div>
<div *ngSwitchCase="'pink'">yor have choosed Pink</div>
<div *ngSwitchDefault="">Invalid Selection</div>
</div>
  `,
  styles: [],
})


export class TestComponent implements OnInit {

  name = '';
  color = "Pink";
  constructor() {}

  ngOnInit(): void {}
  logMessage(data: any) {
    console.log(data);
  }
}
