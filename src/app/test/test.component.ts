import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
<!-- <div *ngFor="let color of colors index as i"> -->
<!-- <div *ngFor="let color of colors first as f"> -->
<!-- <div *ngFor="let color of colors last as l"> -->
<!-- <div *ngFor="let color of colors even as e"> -->
<div *ngFor="let color of colors odd as o">
  <h1>{{o}} {{color}}</h1>
</div>
  `,
  styles: [],
})

export class TestComponent implements OnInit {

  colors =["red","green", "yellow","blue","orang"]
  constructor() {}

  ngOnInit(): void {}
  logMessage(data: any) {
    console.log(data);
  }
}