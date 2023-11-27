import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-books-borrowed',
  templateUrl: './books-borrowed.component.html',
  styleUrls: ['./books-borrowed.component.css']
})
export class BooksBorrowedComponent {
  books:any=[]
  constructor(private _bookService:BookService,private _authService:AuthService){
    this.getUserBorrowedBooks()
  }

  getUserBorrowedBooks(){
    const username=this._authService.getUsername()
    this._bookService.getUserBorrowedBooks(username).subscribe((res)=>{
      this.books=res;
      console.log(res)
    })
  }

}
