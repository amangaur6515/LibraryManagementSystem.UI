import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  filteredItems:any=[];
  books:any=[];
  
  searchForm=new FormGroup({
    searchTerm:new FormControl(''),
  });

  constructor(private _bookService:BookService){
    this.getBooks();
  }

  getBooks(){
    this._bookService.getBooks().subscribe((res:any)=>{
      console.log(res)
      this.books=res;
      //completely assign it to the filtered items array so that initially all books are displayed
      this.filteredItems=res;
      //now when the search term is entered filter from the books array and assign again to filtered items by calling update method
      this.searchForm.valueChanges.subscribe(() => {
        this.updateFilteredItems();
      });
    })
  }

  updateFilteredItems(){
    const searchTerm=this.searchForm.value.searchTerm;
    this.filteredItems = this.books.filter((item:any) =>
      item.name.toLowerCase().includes(searchTerm?.toLowerCase()) ||  item.author.toLowerCase().includes(searchTerm?.toLowerCase()) || item.genre.toLowerCase().includes(searchTerm?.toLowerCase()) 
    );
    //this.cdRef.detectChanges();

  }

}
