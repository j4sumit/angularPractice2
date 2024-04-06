import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  // private _url: string ="./data/employee.json";
  private _url: string ="assets/data/employee.json";
  
  constructor(private http: HttpClient) { }
  getEmployee():Observable<IEmployee[]>{
return this.http.get<IEmployee[]>(this._url)
// return [
//   {"id":1, "name":"Sumit","age":34},
//   {"id":2, "name":"Amit","age":40},
//   {"id":3, "name":"Sanjay","age":44},
//   {"id":4, "name":"Divya","age":4}
// ]
  }
}
