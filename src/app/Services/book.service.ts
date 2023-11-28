import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  userTokens:any;
  private apiUrl="https://localhost:7244/api/Book/";

  constructor(private http:HttpClient,private _authService:AuthService) { }

  addBook(book:any){
    return this.http.post(this.apiUrl+"AddNewBook",book);
  }
  getBooks(){
    return this.http.get(this.apiUrl+"Books");
  }

  borrowBook(book:any){
    return this.http.post(this.apiUrl+"BorrowBook",book)
  }
  getBookById(id:number){
    return this.http.get(this.apiUrl+"BookById/"+id)
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

  storeUserToken(userTokens:any){
    this.userTokens=userTokens
  }
  getUserToken(){
    return this.userTokens;
  }

  returnBook(bookObj:any){
    return this.http.post(this.apiUrl+"ReturnBook",bookObj);
  }

  
  
  

}
