import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>
    <!-- String Interpolation -->
    {{"welcome"+ name}} 
  </h1>
  <input [id]="myId" type="text" value="Sumit">
   <!-- Interpolation not worked on boolean value -->
  <input disabled={{isDiabaled}} id={myId} type="text" value="Sumit">
  <!-- Property binding worked on boolean value -->
  <input [disabled]="isDiabaled" id={myId} type="text" value="Sumit"> 

  `,
  // styleUrls: ['./test.component.css']
  styles: [`
    h1{color:red}
  `]
})
export class TestComponent implements OnInit {
name ="Amit Chaurasiya"
myId = "testID"
isDiabaled=false;

  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello" +this.name
  }
}
