import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: Customer;

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }

  constructor( private customerService: CustomerService ) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe( fetchedCustomer => this.customers = fetchedCustomer );
  }

  delete(customer: Customer): void {
    this.customers = this.customers.filter(h => h !== customer);
    this.customerService.deleteCustomer(customer).subscribe();
  }

}
