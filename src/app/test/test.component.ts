import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  template: `<h1>
    <!-- String Interpolation -->
    {{"welcome"+ name}} 
  </h1>
  <h2>{{4+2}}</h2>
  <h4>{{name.length}}</h4>
  <h5>{{name.toUpperCase()}}</h5>
  <h2>{{greetUser()}}</h2>
  <h4>{{siteUrl}}</h4>
  `,
  // styleUrls: ['./test.component.css']
  styles: [`
    h1{color:red}
  `]
})
export class TestComponent implements OnInit {
name ="Amit Chaurasiya"
siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello" +this.name
  }

}
