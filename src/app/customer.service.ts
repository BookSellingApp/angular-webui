import { Injectable } from '@angular/core';
import { Customer } from "./customer";
import { CUSTOMERS } from "./mock-customer";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private customersUrl = 'http://localhost:8080/api/customers';

  getCustomers(): Observable<Customer[]> {

    this.messageService.add('Customer Service: fetched customers');
    return this.http.get<Customer[]>(this.customersUrl)
      .pipe(
        tap(customers => this.log(`fetched customers`)),
        catchError(this.handleError('getCustomers', []))
      );
  }

  getCustomer(id: String): Observable<Customer> {

    const url = `${this.customersUrl}/${id}`;

    return this.http.get<Customer>(url)
      .pipe(
        tap(_ => this.log(`fetched customer with id=${id}`)),
        catchError(this.handleError<Customer>(`getCustomer id=${id}`))
      );
  }

  /** PUT: update the hero on the server */
  updateCustomer (id: String, customer: Customer): Observable<any> {

    const url = `${this.customersUrl}/${id}`;

    return this.http.put(url, customer, httpOptions).pipe(
      tap(_ => this.log(`updated customer id=${customer.id}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  /** POST: add a new customer to the server */
  addCustomer (customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customer, httpOptions).pipe(
      tap((customer: Customer) => this.log(`added customer w/ id=${customer.id}`)),
      catchError(this.handleError<Customer>('addCustomer'))
    );
  }

  /** DELETE: delete the customer from the server */
  deleteCustomer (customer: Customer | string): Observable<Customer> {
    const id = typeof customer === 'string' ? customer : customer.id;
    const url = `${this.customersUrl}/${id}`;

    return this.http.delete<Customer>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted customer id=${id}`)),
      catchError(this.handleError<Customer>('deleteCustomer'))
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

  /** Log a CustomerService message with the MessageService */
  private log(message: string) {
    this.messageService.add('CustomerService: ' + message);
  }
}
