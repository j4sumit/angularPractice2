import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() { }
  getEmployee(){
return [
  {"id":1, "name":"Sumit","age":34},
  {"id":2, "name":"Amit","age":40},
  {"id":3, "name":"Sanjay","age":44},
  {"id":4, "name":"Divya","age":4}
]
    
  }
}
