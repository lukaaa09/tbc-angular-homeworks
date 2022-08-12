import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../login-interface';
import { map, tap } from 'rxjs';


@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.scss']
})
export class HttpComponentComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(0, Validators.required),
    salary: new FormControl(0, Validators.required)

  })
  employees: Employee[] = []
  updateBtn: boolean = false
  currentEmployee: Employee | null = null;
  employeePages = 3;
  ativeBtn = false;
  displayBtn = true;

  constructor(private myServise: HttpServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll()
  }

  public getAll() {
    this.myServise.getData().pipe(
      tap((data) => {
        this.employees = data
        // if(data.length - 1 > this.employeePages &&  !this.ativeBtn){
        //   this.displayBtn = true;
        //   this.employees = data.filter((value, index) => index <= this.employeePages);
        // }else if(data.length > this.employeePages && this.ativeBtn){
        //   this.employeePages += 4;
        //   if (data.length - 1 > this.employeePages ){
        //     this.displayBtn = true;
        //     this.employees = data.filter((value, index) => index <= this.employeePages);
        //   }else {
        //     this.displayBtn = false;
        //     this.employeePages = data.length - 1;
        //     this.employees = data.filter((value, index) => index <= this.employeePages);
        //   }
        // }
        // else{
        //   this.displayBtn = false;
        //   this.employees = data;
        // }
      })

    ).subscribe()
  }

  public onClickRequest() {
    this.myServise.postRequest(this.loginForm.value).subscribe((employee: Employee) => {
      this.employees.push(employee);
    })
    this.getAll()
    //  this.myServise.postRequest(this.loginForm.value).subscribe()
    //  setTimeout(() => {
    //   this.getAll()
    //  }, 500);
  }
  public editUser(id?: number) {
    // this.myServise.getId(id).pipe(
    //   tap((data) => {
    //     console.log(data)
    //     this.loginForm.get("name")?.setValue(data.name);
    //     this.loginForm.get("age")?.setValue(data.age);
    //     this.loginForm.get("salary")?.setValue(data.salary);

    //   })
    // ).subscribe()
    this.currentEmployee = <Employee>this.employees.find(employee => employee.id === id)
    this.loginForm.get("name")?.setValue((<Employee>this.currentEmployee).name);
    this.loginForm.get("age")?.setValue((<Employee>this.currentEmployee).age);
    this.loginForm.get("salary")?.setValue((<Employee>this.currentEmployee).salary);
    this.updateBtn = true
  }
  public updateUser() {
    this.myServise.updateEmployee((<Employee>this.currentEmployee).id, this.loginForm.value).subscribe(updatedUser => {
      console.log(updatedUser)
      this.employees = this.employees.map(employee => {
        if (employee.id === updatedUser.id) {
          return updatedUser
        }
        return employee
      })
    })
    this.loginForm.reset()
    this.currentEmployee = null
    this.updateBtn = false
  }
  public deleteEmployee(id: any) {
    this.myServise.deleteUser(id).subscribe(() => {
      this.employees = this.employees.filter((v, i) => v.id !== id)
    })
  }

  public showMoreButton() {
    this.myServise.pageLimit += 4;
    this.getAll()
  
  }



}
