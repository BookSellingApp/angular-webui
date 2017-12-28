import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
import { CustomerSearchComponent } from "../customer-search/customer-search.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(fetchedCustomers => this.customers = fetchedCustomers.slice(0, 4));
  }
}
