import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  //errors array
  errors:any=[];

  signupForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",Validators.required),
  });

  constructor(private _authService:AuthService,private route:Router,private toastr:ToastrService) {}
  
  onSubmit(){
    //create user obj
    const user={
      name:this.signupForm.value.name,
      username:this.signupForm.value.email,
      password:this.signupForm.value.password
    }
    
    //call the service method
    this._authService.signup(user).subscribe((res:any)=>{
      console.log(res);
      this.toastr.success("Successfully signup","Lend-A-Read");
      this.route.navigate(['/login']);
    },(err)=>{
      
      //add errors to array
      this.toastr.error("Password error","Lend-A-Read")
      if (err.error instanceof Array) {
        err.error.forEach((err: { description: any; }) => {
          this.errors.push(err.description);
        });
      }else {
        console.log(err); // Display the general error message
      }
    })

  }

  get name(){
    return this.signupForm.controls.name;
  }
  get email(){
    return this.signupForm.controls.email;
  }
  
  get password(){
    return this.signupForm.controls.password;
  }

}
