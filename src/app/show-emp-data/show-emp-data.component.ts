import { Component, OnInit } from '@angular/core';
import * as empData from "./data/employeeData.json";
import {MatTableDataSource} from '@angular/material';

export interface employee{
  id: number;
  name: string;
  phone: any;
  address: address;
}

export interface address{
  city: string;
  address_line1: string;
  address_line2: string;
  postal_code: number;
}

@Component({
  selector: 'app-show-emp-data',
  templateUrl: './show-emp-data.component.html',
  styleUrls: ['./show-emp-data.component.css']
})

export class ShowEmpDataComponent implements OnInit {
  empData : employee[] = empData["data"];
  dataSource = new MatTableDataSource(this.empData);
  displayedColumns: Array<string> = ['id', 'name', 'phone', 'city', 'address_line1', 'address_line2', 'postal_code'];

  constructor() {
  };

  ngOnInit() {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.address.city.toLowerCase().includes(filter);
    };
  }

  checkPhoneNumber(element: employee) {
    if (isNaN(Number(element.phone))) {
      element.phone = "NA";
      return true;
    } else {
      return true;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
