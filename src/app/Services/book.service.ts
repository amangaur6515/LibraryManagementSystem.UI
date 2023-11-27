import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private apiUrl="https://localhost:7244/api/Book/";

  constructor(private http:HttpClient) { }

  addBook(book:any){
    return this.http.post(this.apiUrl+"AddNewBook",book);
  }
  getBooks(){
    return this.http.get(this.apiUrl+"Books");
  }

  getUserLendBooks(username:any){
    return this.http.get(this.apiUrl+"BooksLentByUserId/"+username);
  }
  getUserBorrowedBooks(username:any){
    return this.http.get(this.apiUrl+"BooksBorrowedByUserId/"+username);
  }

  getUserTokens(username:any){
    return this.http.get(this.apiUrl+"TokensByUserId/"+username);
  }

  // storeUserTokens(tokens:any){
  //   localStorage.setItem("userTokens",tokens);
  // }

  // getToken(){
  //   return localStorage.getItem("userTokens")
  // }
  

}
