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
  displayBtn = false;

  constructor(private myServise: HttpServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll()
  }

  public getAll() {
    this.myServise.getData().pipe(
      tap((data) => {
        this.employees = data

      })

    ).subscribe()
  }

  public onClickRequest() {
    this.myServise.postRequest(this.loginForm.value).subscribe(  _ => {
      if(this.employees.length < 4)  this.getAll()
    } 
    )
    this.displayBtn = true
    console.log(this.employees.length)
    // this.getAll()
    //  this.myServise.postRequest(this.loginForm.value).subscribe()
    //  setTimeout(() => {
    //   this.getAll()
    //  }, 500);
  }
  public editUser(id?: number) {

    this.myServise.getId(id).pipe(
      tap(employee => {
        this.currentEmployee = employee
        this.loginForm.get("name")?.setValue((<Employee>this.currentEmployee).name);
        this.loginForm.get("age")?.setValue((<Employee>this.currentEmployee).age);
        this.loginForm.get("salary")?.setValue((<Employee>this.currentEmployee).salary);
        this.updateBtn = true
      })
    ).subscribe()

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
  public get shouldShawMore() {
    return this.employees.length > 0 || this.displayBtn 
  }
}
