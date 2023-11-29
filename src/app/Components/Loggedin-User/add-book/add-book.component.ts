import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { BookService } from 'src/app/Services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  addForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    author:new FormControl('',[Validators.required]),
    rating:new FormControl('',[Validators.required]),
    genre:new FormControl('',[Validators.required]),
    isAvailable:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
  });

  constructor(private _authService:AuthService,private _bookService:BookService,private toastr:ToastrService,private _router: Router){}

  onSubmit(){
    const username=this._authService.getUsername();
    let isAvailable:boolean;
    if(this.addForm.value.isAvailable=="true"){
      isAvailable=true
    }else{
      isAvailable=false
    }
    //create a car object
    const book={
      name:this.addForm.value.name,
      author:this.addForm.value.author,
      rating:this.addForm.value.rating,
      genre:this.addForm.value.genre,
      isAvailable:isAvailable,
      description:this.addForm.value.description,
      lentByUserId:username,
      borrowedByUserId:''
    }

    //call the service method and pass
    this._bookService.addBook(book).subscribe((res:any)=>{
      Swal.fire({
      icon: "success",
      title: "<h4 style='color:blue';>"+book.name+"</h4>has been added successfully",
      });
      this._router.navigate(['/my-lend-books'])
    },(err)=>{
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        });
    })
  }

  //for validation
  get name(){
    return this.addForm.controls.name;
  }
  get author(){
    return this.addForm.controls.author;
  }
  get rating(){
    return this.addForm.controls.rating;
  }
  get genre(){
    return this.addForm.controls.genre;
  }
  get isAvailable(){
    return this.addForm.controls.rating;
  }
  get description(){
    return this.addForm.controls.description;
  }

}
