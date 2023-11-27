import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-books-lend',
  templateUrl: './books-lend.component.html',
  styleUrls: ['./books-lend.component.css']
})
export class BooksLendComponent {
  books:any=[]
  constructor(private _bookService:BookService,private _authService:AuthService){
    this.getUserLendBooks()
  }

  getUserLendBooks(){
    const username=this._authService.getUsername()
    this._bookService.getUserLendBooks(username).subscribe((res)=>{
      this.books=res;
      console.log(res)
    })
  }
  
}
