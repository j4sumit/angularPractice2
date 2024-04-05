import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  employees :any[] =[]
  constructor(private _employeeService : EmployeeserviceService) { }

  ngOnInit(): void {
    this.employees=this._employeeService.getEmployee()
  }

}
