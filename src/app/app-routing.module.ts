import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Anonymous-User/login/login.component';
import { SignupComponent } from './Components/Anonymous-User/signup/signup.component';
import { AnonymousHomePageComponent } from './Components/Anonymous-User/anonymous-home-page/anonymous-home-page.component';
import { UserHomeComponent } from './Components/Loggedin-User/user-home/user-home.component';
import { BooksLendComponent } from './Components/Loggedin-User/books-lend/books-lend.component';
import { BooksBorrowedComponent } from './Components/Loggedin-User/books-borrowed/books-borrowed.component';
import { AddBookComponent } from './Components/Loggedin-User/add-book/add-book.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"",component:AnonymousHomePageComponent},
  {path:"user-home",component:UserHomeComponent},
  {path:"my-lend-books",component:BooksLendComponent},
  {path:"my-borrowed-books",component:BooksBorrowedComponent},
  {path:"my-lend-books/add-book",component:AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
