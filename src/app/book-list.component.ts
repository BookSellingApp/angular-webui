import { Component, Input, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html'
})

export class BookListComponent implements OnInit {
  books: Book[];
  newBook: Book = new Book();
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
      .then(books => this.books = books );
  }

  createBook(bookForm: NgForm): void {
    this.bookService.createBook(this.newBook)
      .then(createBook => {
        bookForm.reset();
        this.newBook = new Book();
        this.books.unshift(createBook)
      });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id)
    .then(() => {
      this.books = this.books.filter(book => book.id != id);
    });
  }

  updateBook(bookData: Book): void {
    console.log(bookData);
    this.bookService.updateBook(bookData)
    .then(updatedBook => {
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
