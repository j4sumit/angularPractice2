import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>
    {{"welcome"+ name}} 
  </h1>
  <h2 class="text-special">Practice to successed in Accenture 1</h2>
  <h2 [class]="successClass">Practice to successed in Accenture 2</h2>
  <h2 class="text-special" [class]="successClass">Practice to successed in Accenture 3</h2>
  <h2 class="text-special" [class]="successClass">Practice to successed in Accenture 4</h2>
  <!-- for only single class -->
  <h2 [class.text-danger]="hasError">Practice to successed in Accenture 5</h2>
  <!-- for multiple class -->
  <h2 [ngClass]="messageClasses">Practice to successed in Accenture 6</h2>
  
  `,
  styles: [`
.text-success{
  color:green;
}
.text-danger{
  color:red;
}
.text-special{
  font-style:italic;
}
`]
})
export class TestComponent implements OnInit {
name ="Amit Chaurasiya"
successClass="text-success"
hasError= true;
isSpecial=true;
messageClasses ={
  "text-success": !this.hasError,
  "text-danger" : this.hasError,
  "text-special" : this.isSpecial
}

  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello" +this.name
  }
}
