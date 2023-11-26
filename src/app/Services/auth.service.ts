import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl="https://localhost:7244/api/Auth/";

  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post(this.apiUrl+"login",user);
  }

  signup(user:any){
    return this.http.post(this.apiUrl+"Signup/",user)
  }

  storeUsername(username:string){
    localStorage.setItem("username",username);
  }
  getUsername(){
    const username=localStorage.getItem("username");
    return username;
  }
  deleteUsername(){
    localStorage.removeItem("username");
  }

}
