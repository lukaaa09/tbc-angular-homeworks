import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {
    if(localStorage.getItem('token')){
      this.isLoggedIn.next(true);
    }
   }

  getAllUsers(){
    return this.http.get(`${environment.baseUrl}/users`)
  }

  loginUser(user: any){
    return this.http.post(`${environment.baseUrl}/login`, user)
  }

  registerUser(user: any){
    return this.http.post(`${environment.baseUrl}/register`, user)
  }

  updateUser(id: string, user: any){
    return this.http.put(`${environment.baseUrl}/users/${id}`, user)
  }

  deleteUser(id: number){
    return this.http.delete(`${environment.baseUrl}/users/${id}`)
  }

  logOutUser(){
    localStorage.clear()
    this.isLoggedIn.next(false)
    this.router.navigateByUrl('/').then()
  }
}
