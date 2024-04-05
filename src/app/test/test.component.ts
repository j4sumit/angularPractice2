import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
<h2>{{name}}</h2>
<h2>{{name |lowercase}}</h2>
<h2>{{name |uppercase}}</h2>
<h2>{{name |titlecase}}</h2>
<h2>{{message |slice: 1 }}</h2>
<h2>{{message |slice: 1 :4}}</h2>
<h2>{{message |slice: 1 :4}}</h2>
<h2>{{person |json}}</h2>
<h2>{{5.678 | number : '1.2-3'}}</h2>
<h2>{{5.678 | number : '3.4-5'}}</h2>
<h2>{{5.678 | number : '3.1-2'}}</h2>
<h2>{{0.25 | percent}}</h2>

<h2>{{0.25| currency}}</h2>
<h2>{{0.25| currency : 'EUR'}}</h2>
<h2>{{0.25| currency : 'INR'}}</h2>
<h2>{{0.25| currency : 'GBP'}}</h2>
<h2>{{0.25| currency : 'GBP' :'code'}}</h2>

<h2>{{date}}</h2>
<h2>{{date| date:'short'}}</h2>
<h2>{{date | date:'shortDate'}}</h2>
<h2>{{date | date:'shortTime'}}</h2>
  `,
  styles: [],
})

export class TestComponent implements OnInit {
name ="Sumit chaurasiya"
message ="Accenture learing started"
person={
  "firstName":"Sumit ",
  "lastName":"Chaurasiya"
}
date= new Date();
  constructor() {}
  ngOnInit(): void {}
}