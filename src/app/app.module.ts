import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SignupComponent } from './Components/Anonymous-User/signup/signup.component';
import { LoginComponent } from './Components/Anonymous-User/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { AnonymousHomePageComponent } from './Components/Anonymous-User/anonymous-home-page/anonymous-home-page.component';
import { UserHomeComponent } from './Components/Loggedin-User/user-home/user-home.component';
import { BooksLendComponent } from './Components/Loggedin-User/books-lend/books-lend.component';
import { BooksBorrowedComponent } from './Components/Loggedin-User/books-borrowed/books-borrowed.component';
import { AddBookComponent } from './Components/Loggedin-User/add-book/add-book.component';
import { BookDetailsComponent } from './Components/Loggedin-User/book-details/book-details.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { WildCardComponent } from './Components/Shared/wild-card/wild-card.component';
import { BooksAddedByUserComponent } from './Components/Loggedin-User/books-added-by-user/books-added-by-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AnonymousHomePageComponent,
    UserHomeComponent,
    BooksLendComponent,
    BooksBorrowedComponent,
    AddBookComponent,
    BookDetailsComponent,
    NavbarComponent,
    WildCardComponent,
    BooksAddedByUserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
