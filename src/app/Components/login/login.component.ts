import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

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

  constructor(private _authService:AuthService,private toastr: ToastrService,private _router: Router){}

  onSubmit(){
    //create the userobj
    const user={
      username:this.loginForm.value.username,
      password:this.loginForm.value.password
    }
    //call the service
    this._authService.login(user).subscribe((res:any)=>{
      this._authService.storeUsername(res.username);
      //notification
      this.toastr.success("Successfully Login","Lend-A-Read");
      this._router.navigate(['/user-home'])
    },
    (error)=>{
      this.toastr.error("Invalid Credentials","Lend-A-Read")
    })


  }

  get username(){
    return this.loginForm.controls.username;
 
  }
  get password(){
    return this.loginForm.controls.password;
 
  }

}
