import { HttpClient,HttpErrorResponse,HttpResponse,HttpRequest,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { Book } from './book';
import { map } from 'rxjs/operators';
//import { Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/catch';

@Injectable()
export class BookService{
  constructor(private _httpService: HttpClient){}
  //the _httpService is where you connect from your backend so make sure the localhost
  //number is correct on your end and change it when it is not port 8080

  //This the GET Method for the frontend
  //An observable is create to view and execute the object in the function
  getAllBooks(): Observable<Book[]>{
    return this._httpService.get("http://localhost:8081/bookapi/api/book")
    .pipe(map((response: any) => response));
    //    .pipe(map((response: any) => response.catch(this.handleError)));

  }
  private handleError(error:HttpErrorResponse){
    return throwError(error.message);
  }
//POST method
//displays the updated data when posting data into the form on the frontend
  addBook(book: Book){
    let body=JSON.stringify(book);

    //this is old way to do headers adn options for angular to know what to POST
    //let headers= new Headers({'Content-Type': 'application/json'});
    //let options = new RequestOptions({headers: headers});

    //the new way is done in one line that combines both headers and options
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    //We return the _httpService and post the updated data on to the URL location
   return this._httpService.post("http://localhost:8081/bookapi/api/book",body,headers);
  }

}
