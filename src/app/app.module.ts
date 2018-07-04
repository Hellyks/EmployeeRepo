import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { ShowEmpDataComponent } from './show-emp-data/show-emp-data.component';
import {MatTableModule} from '@angular/material/table';

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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
