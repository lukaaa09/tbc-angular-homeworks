import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpComponentComponent } from './http-component.component';
import { EmployeeRoutingModule } from './employee-routing.module';



@NgModule({
  declarations: [HttpComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeRoutingModule
  ],
  exports: [HttpComponentComponent]
})
export class EmployeeModule { }
