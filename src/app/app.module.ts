import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';


import { BookService } from './book.service';
import {CustomerComponent} from "./customer/customer.component";
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import {CustomerService} from "./customer.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { ViewAllCustomersComponent } from './customer/view-all-customers.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CustomerSearchComponent,
    NavbarComponent,
    BookComponent,
    BookDetailComponent,
    BookSearchComponent,
    ViewAllCustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BookService, CustomerService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }





