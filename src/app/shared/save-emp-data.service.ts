import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {employee} from "../show-emp-data/show-emp-data.component";

@Injectable()
export class SaveEmpDataService {

  private postDataUrl = ( isUpdate:boolean ) => `/api/isupdate=${isUpdate}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}

  constructor( private httpClient: HttpClient ) { }

  addEmpData(data: employee) {
    let isUpdate: boolean = false;
    let body = JSON.stringify(data);
    return this.httpClient.post( this.postDataUrl(isUpdate), body, this.httpOptions);
  }

  updateEmpData(data: employee) {
    let isUpdate: boolean = true;
    let body = JSON.stringify(data);

    return this.httpClient.post( this.postDataUrl(isUpdate), body, this.httpOptions);
  }

}
