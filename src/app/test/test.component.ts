import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
<h2 *ngIf="true">Accenture Practice</h2>
<!-- EX :-1 -->
<!-- <h2 *ngIf="displayStatus">Accenture Practice2</h2> -->

<!-- Ex-2 -->
<!-- <h2 *ngIf ="displayStatus else elseBlock" >if Block</h2>
<ng-template #elseBlock> Else block</ng-template> -->

 <!-- Ex-3 -->
<div *ngIf="displayStatus; then  ifBlock else elseBlock"> </div>
<ng-template #ifBlock>
  <h1>If Block code </h1>
</ng-template>
<ng-template #elseBlock>
  <h1>else Block code</h1>
</ng-template>

  `,
  styles: [],
})





export class TestComponent implements OnInit {

  name = '';
  displayStatus=true;
  constructor() {}

  ngOnInit(): void {}
  logMessage(data: any) {
    console.log(data);
  }
}
