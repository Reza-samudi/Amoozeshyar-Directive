import { Injectable } from '@angular/core'; 
import { HttpClient} from '@angular/common/http';
import { RegisterRequest } from '../models/RegisterRequest';
import { LoginRequest } from '../models/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  async RegisterRequest(request:RegisterRequest){
    return this.http.post('/api/Interns',request).toPromise();
  }
  
  async LoginRequest(request:LoginRequest) {
    return this.http.post('/Authentication/Login',request).toPromise();
  }
}
