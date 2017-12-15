import { Injectable } from '@angular/core';
import { Book } from './book';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
private baseUrl = 'http://localhost:8080';

constructor(private http: Http) { }

  getBooks():  Promise<Book[]> {
    return this.http.get(this.baseUrl + '/api/books/')
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);
  }

  createBook(bookData: Book): Promise<Book> {
    return this.http.post(this.baseUrl + '/api/books/', bookData)
      .toPromise().then(response => response.json() as Book)
      .catch(this.handleError);
  }

  updateBook(bookData: Book): Promise<Book> {
    return this.http.put(this.baseUrl + '/api/books/' + bookData.id, bookData)
      .toPromise()
      .then(response => response.json() as Book)
      .catch(this.handleError);
  }

  deleteBook(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/books/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
