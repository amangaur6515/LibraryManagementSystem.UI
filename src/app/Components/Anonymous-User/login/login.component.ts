import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { BookService } from 'src/app/Services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });

  constructor(private _authService:AuthService,private _bookService:BookService,private toastr: ToastrService,private _router: Router){}

  onSubmit(){
    //create the userobj
    const user={
      username:this.loginForm.value.username,
      password:this.loginForm.value.password
    }
    
    //call the service
    this._authService.login(user).subscribe((res:any)=>{
      this._authService.storeUsername(res.username);
      Swal.fire({
        imageUrl: "https://img.freepik.com/premium-photo/opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_391052-12859.jpg",
        imageWidth: 400,
        imageHeight: 200,
        title:"<h4 class='text-primary'>Welcome</h4> <h5 style='color:#008080;'> "+user.username+"</h5>",
        text: "Discover a world of books waiting to be borrowed and shared. 📚✨ Explore our collection",
        footer:"Happy reading! The Lend-A-Read Team"
        
      });
      
      this._router.navigate(['/user-home'])
    },
    (error)=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Credentials",
        
      });
    })


  }

  get username(){
    return this.loginForm.controls.username;
  }
  get password(){
    return this.loginForm.controls.password;
 
  }

}
