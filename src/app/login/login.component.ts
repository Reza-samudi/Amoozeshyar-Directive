import { Component, OnInit } from '@angular/core';
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

  constructor(private backend:BackendService) { }
  
  ngOnInit(): void {
    this.loginRequest = new LoginRequest;
  }

  async login(){
    var result= await this.backend.LoginRequest(this.loginRequest);
    console.log(result);
  }
}