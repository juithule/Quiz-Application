import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:4200/";

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterData): Observable<any> {
    return this.http.post(BASIC_URL + "api/auth/sign-up", data);
  }

  
  login(loginRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "api/auth/login", loginRequest);
  }

}
