import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private userService: UserService) { }

  logout(){
    this.userService.logOutUser()
  }

  ngOnInit(): void {
  }
  
  public get isUserLoggedIn(){    
    return this.userService.isLoggedIn
  }

  public get isUserSalaryEligible(){
    return Number(localStorage.getItem('salary')) > 400
  }

}
