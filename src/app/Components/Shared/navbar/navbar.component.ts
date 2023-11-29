import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/Services/auth.service';
import { BookService } from 'src/app/Services/book.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  userTokens:any;
  constructor(private _authService:AuthService,private _bookService:BookService,private route:Router,private toastr:ToastrService){
    this.getUserTokens();
  }

  getUserTokens(){
    const username=this._authService.getUsername()
    this._bookService.getUserTokens(username).subscribe((res)=>{
      this._bookService.storeUserToken(res)
      this.userTokens=this._bookService.getUserToken();
      console.log(this.userTokens)
    });
  }

  get username(): string | null {
    
    return localStorage.getItem("username");
  }

  isLogin(){
    return this._authService.isLoggedIn();
  }

  logout(){
    
    Swal.fire({
      title: "Do you want to Logout?",
      imageUrl: "https://st5.depositphotos.com/10614052/67676/i/450/depositphotos_676769868-stock-photo-open-old-book-wooden-background.jpg",
      imageWidth: 400,
      imageHeight: 200,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      
      if (result.isConfirmed) {
        this._authService.deleteUsername();
        Swal.fire("Logged out! see you soon :)", "", "success");
        this.route.navigate([''])
      } else if (result.isDenied) {
        Swal.fire("Continue exploring our collection", "", "info");
      }
    });
    
    
  }

}
