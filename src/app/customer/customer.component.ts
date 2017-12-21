import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

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

  add(firstName: string, lastName: string, emailId: string, mobileNumber: string): void {

    firstName = firstName.trim();
    lastName = lastName.trim();
    emailId = emailId.trim();
    mobileNumber = mobileNumber.trim();

    if (!firstName && !lastName && !emailId && !mobileNumber) { return; }

    this.customerService.addCustomer({ firstName, lastName, emailId, mobileNumber } as Customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }

  delete(customer: Customer): void {
    this.customers = this.customers.filter(h => h !== customer);
    this.customerService.deleteCustomer(customer).subscribe();
  }
}

