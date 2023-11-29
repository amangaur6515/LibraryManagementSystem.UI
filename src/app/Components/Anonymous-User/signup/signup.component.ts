import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: "Do you want to finally submit?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Submit",
      denyButtonText: `Review`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //call the service method
        this._authService.signup(user).subscribe((res:any)=>{
          this.route.navigate(['/login']);
      },(err)=>{
        //add errors to array
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          
        });
        if (err.error instanceof Array) {
          err.error.forEach((err: { description: any; }) => {
          this.errors.push(err.description);
          });
        }else {
        console.log(err); // Display the general error message
        }
        })
        Swal.fire({
          icon: "success",
          imageUrl: "https://img.freepik.com/premium-photo/opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_391052-12859.jpg",
          imageWidth: 400,
          imageHeight: 200,
          title: "You have been successfully registered",
          footer: 'Now proceed to login'
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    
    

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
