import {Component, Input, OnInit} from '@angular/core';
import {address, employee} from "../show-emp-data/show-emp-data.component";
import {SaveEmpDataService} from "../shared/save-emp-data.service";
import * as empData from "../data/employeeData.json";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-emp-data',
  templateUrl: './add-emp-data.component.html',
  styleUrls: ['./add-emp-data.component.css']
})
export class AddEmpDataComponent implements OnInit {

  employeeDataList:employee[] = empData["data"];
  employeeData:employee;
  isEdit:boolean = false;

  constructor(private saveEmpDataService: SaveEmpDataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( ( param ) => {
        let id = param["id"];
        if(id){
          Object.entries(this.employeeDataList).forEach(([key, value]) => {
              if(this.employeeDataList[key].id == id){
                this.employeeData = this.employeeDataList[key];
                this.isEdit = true;
              }
          });
        }
        else{
          this.employeeData = <employee> new Object();
          this.employeeData.address = <address> new Object();
        }
      });
  }

  saveData(){
    if(this.isEdit){
      this.updateData();
    }
    else {
      this.addData();
    }
  }

  addData(){
    this.saveEmpDataService.addEmpData(this.employeeData).subscribe(
      response => console.log(response),      //this will give error because we haven't used right api for post req
      err => this.handleError()
    );
  }

  updateData(){
    this.saveEmpDataService.updateEmpData(this.employeeData).subscribe(
      response => console.log(response),    //this will give error because we haven't used right api for post req
      err => this.handleError()
    )
  }

  handleError(){
    /*let url = this.router.createUrlTree( [ this.selectedBook ],
      { relativeTo: this.activatedRoute.parent } );*/
    this.isEdit = false;
    this.router.navigateByUrl( "", { replaceUrl: true } );
  }
}
