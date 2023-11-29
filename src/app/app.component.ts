import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from './Services/book.service';
import 'node_modules/bootstrap/dist/js/bootstrap.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookBorrowingSystem.UI';
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
    this._authService.deleteUsername();
    this.route.navigate([''])
    this.toastr.success("Logout Success","Lend-A-Read")
  }

}
