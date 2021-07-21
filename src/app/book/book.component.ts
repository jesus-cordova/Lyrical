import { Component,OnInit } from "@angular/core";
import { Book } from "./book";
import { BookService } from "./book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
//creating an array of books
  books: Book[];
//creating a new object called book
  book = new Book();

  constructor(private _bookService: BookService){}
  ngOnInit(): void{
    this.getBooks();
  }
  //the function that would get all the book data from the database by subscribing it into books with bookData and console logging
  //it to see if it acutally got the data
  getBooks(): void {
    this._bookService.getAllBooks().subscribe((bookData)=>{this.books=bookData,console.log(bookData)},(error)=>{
      console.log(error);
    });
  }

  //function to post book into the database
//calls on the addBook from the book.service.ts and passes the object book into and subscribe the data and print out the result
//in the console, most of the logic of addBook here is done in book.service.ts and we are just calling it here.
  addBook(): void {
    this._bookService.addBook(this.book).subscribe((response)=>{console.log(response)
      this.reset();
    },
    (error)=>{
      console.log(error);
    })
  }
//resets the values when clicking on the submit button on the form
  private reset(){
    this.book.id=null;
    this.book.title=null;
    this.book.author=null;
  }
}
