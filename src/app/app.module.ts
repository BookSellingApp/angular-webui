import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

import { BookListComponent } from './book-list.component';

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


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CustomerComponent,
    CustomerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CustomerSearchComponent,
    NavbarComponent
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





