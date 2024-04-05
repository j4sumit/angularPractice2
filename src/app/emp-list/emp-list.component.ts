import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees :any[] =[]
  constructor(private _employeeservice: EmployeeserviceService) { }

  ngOnInit(): void {
    this.employees=this._employeeservice.getEmployee()
  }

}
