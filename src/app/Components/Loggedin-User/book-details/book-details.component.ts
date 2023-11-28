import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { BookService } from 'src/app/Services/book.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book:any;
  bookId:number=0;
  constructor(private _bookService:BookService,private _authService:AuthService,private route: ActivatedRoute,private toastr:ToastrService,private _route:Router){
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

  borrowBook(bookId:number){
    const user=this._authService.getUsername()
    const currentDate=new Date();
    const book={
      bookId: bookId,
      date: currentDate.toLocaleDateString('en-GB'),
      borrowedByUserId:user,
      lentByUserId:this.book.lentByUserId
    }
    this._bookService.borrowBook(book).subscribe((res)=>{
      Swal.fire({
        icon:"success",
        title: "Book borrowed successfully",
        text: "Enjoy Reading",
        imageUrl: "https://st5.depositphotos.com/10614052/67676/i/450/depositphotos_676769868-stock-photo-open-old-book-wooden-background.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Book image"
      });
      
      this._route.navigate(['my-borrowed-books'])
    },(err)=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insufficient Tokens",
        footer: 'Atleast 1 token is required in order to borrow any book'
      });

    })

  }

  getUserName(){
    return this._authService.getUsername()
  }
  
}
