import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-books-added-by-user',
  templateUrl: './books-added-by-user.component.html',
  styleUrls: ['./books-added-by-user.component.css']
})
export class BooksAddedByUserComponent {
  books:any=[]
  constructor(private _bookService:BookService){
    this.getUserAddedBooks()
  }

  getUserAddedBooks(){
    
    this._bookService.getBooksByStoredUser().subscribe((res)=>{
      this.books=res;
      console.log(res)
    })
  }

}
