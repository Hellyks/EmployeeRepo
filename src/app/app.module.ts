import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { ShowEmpDataComponent } from './show-emp-data/show-emp-data.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule, MatInputModule } from "@angular/material";

const empRoutes: Routes = [
  { path: "", component: ShowEmpDataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowEmpDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(empRoutes),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
