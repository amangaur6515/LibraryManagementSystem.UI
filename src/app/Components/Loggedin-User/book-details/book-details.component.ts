import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book:any;
  bookId:number=0;
  constructor(private _bookService:BookService,private _authService:AuthService,private route: ActivatedRoute){
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
    });
    this.getBookById(this.bookId)
  }
  getBookById(id:number){
    this._bookService.getBookById(id).subscribe((res:any)=>{
      
      this.book=res;
      
      
    })
  }
  
}
