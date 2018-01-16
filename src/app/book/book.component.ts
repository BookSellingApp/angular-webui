import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from "../book";
import { BookService } from "../book.service";
import {Stock} from "../stock";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})

export class BookComponent implements OnInit {
  books: Book[];
  newBook: Book = new Book();
  newStock: Stock = this.newBook.stock;
  editing: boolean = false;
  editingBook: Book = new Book();

  constructor(
    private bookService: BookService,
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books );
  }

  createBook(bookForm: NgForm): void {
    this.bookService.createBook(this.newBook)
      .subscribe(createBook => {
        bookForm.reset();
        this.newBook = new Book();
        this.books.unshift(createBook)
      });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id)
      .subscribe(() => {
        this.books = this.books.filter(book => book.id != id);
      });
  }

  updateBook(bookData: Book): void {
    console.log(bookData);
    this.bookService.updateBook(bookData)
      .subscribe(updatedBook => {
        let existingBook = this.books.find(book => book.id === updatedBook.id);
        Object.assign(existingBook, updatedBook);
        this.clearEditing();
      });
  }



  editBook(bookData: Book): void {
    this.editing = true;
    Object.assign(this.editingBook, bookData);
  }

  clearEditing(): void {
    this.editingBook = new Book();
    this.editing = false;
  }
}
