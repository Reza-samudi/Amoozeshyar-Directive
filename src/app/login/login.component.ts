import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginRequest:LoginRequest;
  loginResponse:LoginResponse;

  constructor(private backend:BackendService,private router:Router) { }
  
  ngOnInit(): void {
    this.loginRequest = new LoginRequest;
  }

  async login(){
    this.loginResponse= await this.backend.LoginRequest(this.loginRequest) as LoginResponse;
    if(this.loginResponse.isAuthenticated==true){
      sessionStorage.setItem('token' , this.loginResponse.token);
      sessionStorage.setItem('role' ,this.loginResponse.role);
      if(this.loginResponse.role=='Intern')
      this.router.navigate(['/users/interns']);
    }
    else if(this.loginResponse.role=='Professor'){
      this.router.navigate(['/users/professor']);
    }
  }
}