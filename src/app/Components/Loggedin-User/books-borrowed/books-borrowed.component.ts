import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { BookService } from 'src/app/Services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-books-borrowed',
  templateUrl: './books-borrowed.component.html',
  styleUrls: ['./books-borrowed.component.css']
})
export class BooksBorrowedComponent {
  books:any=[]
  constructor(private _bookService:BookService,private _authService:AuthService,private toastr:ToastrService,private route:Router){
    this.getUserBorrowedBooks()
  }

  getUserBorrowedBooks(){
    const username=this._authService.getUsername()
    this._bookService.getUserBorrowedBooks(username).subscribe((res)=>{
      this.books=res;
      console.log(res)
    })
  }

  returnBook(bookObj:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._bookService.returnBook(bookObj).subscribe((res)=>{
          Swal.fire({
      
            title: "Returned!",
            text: "Your Book has been returned.",
            icon: "success"
          });
          //update the books array
          // Find the index of the book  in the books array
          const index = this.books.findIndex((book:any) => book.id === bookObj.id);
         // If the book is found in the array, remove it
         if (index !== -1) {
          this.books.splice(index, 1);
         }
        },(err)=>{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
           
          });
        })
      }else{

      }

      
    });
    
  }

}
