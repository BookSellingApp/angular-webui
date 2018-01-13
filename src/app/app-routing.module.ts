import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from "./customer/customer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import {BookComponent} from "./book/book.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {ViewAllCustomersComponent} from "./customer/view-all-customers.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'customers', component: CustomerComponent },
  { path: 'viewcustomers', component: ViewAllCustomersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CustomerDetailComponent },
  { path: 'books', component: BookComponent },
  { path: 'bookDetails/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
