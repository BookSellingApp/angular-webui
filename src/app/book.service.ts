import { Injectable } from '@angular/core';
import { Book } from "./book";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private booksUrl = 'http://localhost:8080/api/books';

  getBooks(): Observable<Book[]> {

    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(books => this.log(`fetched books`)),
        catchError(this.handleError('getBooks', []))
      );
  }

  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      // if not search term, return empty book array.
      return of([]);
    }
    // return this.http.get<Book[]>(`${this.booksUrl}/search/${term}`)
    return this.http.get<Book[]>(`${this.booksUrl}/search/${term}`)
      .pipe(
        tap(books => this.log(`fetched books matching "${term}"`)),
        catchError(this.handleError<Book[]>('searchBooks', []))
      );
  }

  getBookNo404<Data>(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book[]>(url)
      .pipe(
        map(books => books[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} book id=${id}`);
        }),
        catchError(this.handleError<Book>(`getBook id=${id}`))
      );
  }

  getBook(id: String): Observable<Book> {

    const url = `${this.booksUrl}/${id}`;

    return this.http.get<Book>(url)
      .pipe(
        tap(_ => this.log(`fetched book with id=${id}`)),
        catchError(this.handleError<Book>(`getBook id=${id}`))
      );
  }

  /** PUT: update the hero on the server */
  updateBook (book: Book): Observable<any> {

    const url = `${this.booksUrl}/${book.id}`;

    return this.http.put(url, book, httpOptions).pipe(
      tap(_ => this.log(`updated book id=${book.id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }

  /** POST: add a new book to the server */
  createBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
      tap((book: Book) => this.log(`added book w/ id=${book.id}`)),
      catchError(this.handleError<Book>('addBook'))
    );
  }

  /** DELETE: delete the book from the server */
  deleteBook (book: Book | string): Observable<Book> {
    const id = typeof book === 'string' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;

    return this.http.delete<Book>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted book id=${id}`)),
      catchError(this.handleError<Book>('deleteBook'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a BookService message with the MessageService */
  private log(message: string) {
    this.messageService.add('BookService: ' + message);
  }
}
