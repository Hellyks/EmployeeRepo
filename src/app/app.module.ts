import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { ShowEmpDataComponent } from './show-emp-data/show-emp-data.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatFormFieldModule } from "@angular/material";
import { AddEmpDataComponent } from './add-emp-data/add-emp-data.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SaveEmpDataService } from "./shared/save-emp-data.service";

const empRoutes: Routes = [
  { path: "", component: ShowEmpDataComponent },
  { path:"employees/add", component: AddEmpDataComponent },
  { path:"employees/:id/edit", component: AddEmpDataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowEmpDataComponent,
    AddEmpDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(empRoutes),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    SaveEmpDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
