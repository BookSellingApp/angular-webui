import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {CustomerSearchComponent} from "../customer-search/customer-search.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];
  book = new Book();

  addItemToCart(book) {
    this.book = book;
  }

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.bookService.getBooks()
      .subscribe(fetchedBooks => this.books = fetchedBooks);
  }
}
