import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  template: `<h1>
    heading form internal template
  </h1>`,
  // styleUrls: ['./test.component.css']
  styles: [`
    h1{color:red}
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
