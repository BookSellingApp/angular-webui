import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from "./customer/customer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import {BookComponent} from "./book/book.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'customers', component: CustomerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CustomerDetailComponent },
  { path: 'books', component: BookComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
