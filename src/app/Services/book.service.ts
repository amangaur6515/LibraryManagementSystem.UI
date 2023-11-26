import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl="https://localhost:7244/api/Book/";

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get(this.apiUrl+"Books");
  }

  getUserTokens(username:any){
    return this.http.get(this.apiUrl+"TokensByUserId/"+username);
  }
  
  }

}
