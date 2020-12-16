import { BackendService } from '../services/backend.service';
import { Component, OnInit } from '@angular/core';
import {RegisterRequest} from '../models/RegisterRequest';
import {RegisterResponse} from '../models/RegisterResponse';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerRequest:RegisterRequest;
  confirmPassword:string;
  registerResponse:RegisterResponse;
  constructor(private backend:BackendService) { }

  ngOnInit(): void {
    this.registerRequest= new RegisterRequest;
  }

  async register(){
    this.registerResponse=await this.backend.RegisterRequest(this.registerRequest) as RegisterResponse;

  }

  isValid():boolean{
    if(this.registerRequest.mobile=='' || this.registerRequest.mobile==undefined) {
      
      return false; 
    }
    if(this.confirmPassword!==this.registerRequest.password){
      return false;
    }
    return true;
  }


}

