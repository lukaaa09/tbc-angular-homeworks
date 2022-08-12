import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './login-interface';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private baseUrl = "http://localhost:3000";
  pageLimit = 4;

  constructor(private http: HttpClient) { }

  public postRequest(employee: any): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/employees`, employee)
  }
  public getData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees?_limit=${this.pageLimit}`)
  }
  public getId(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/employees/${id}`)
  }
  public updateEmployee(id: number | undefined, employee: any): Observable<Employee> {
   return  this.http.put<Employee>(`${this.baseUrl}/employees/${id}`, employee)
  }
  public deleteUser(id: any)  {
    return this.http.delete(`${this.baseUrl}/employees/${id}`)
  }



}
