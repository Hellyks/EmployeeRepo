import { Component, OnInit } from '@angular/core';
import * as empData from "./data/employeeData.json";

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

    empDataList: Array<employee>;
    displayedColumns: Array<string>;

    constructor(){
      this.displayedColumns = ['id', 'name', 'phone', 'city', 'address_line1', 'address_line2', 'postal_code'];
      this.empDataList = empData["data"];
    };

  ngOnInit() {
  }

  checkPhoneNumber(element:employee){
    debugger;
    if(isNaN(Number(element.phone))){
      element.phone = "NA";
      return true;
    }else{
      return true;
    }
  }
}
