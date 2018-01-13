import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
import {Address} from "../address";
import {post} from "selenium-webdriver/http";

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

  add(firstName: string, lastName: string, emailId: string, password: string, mobileNumber: string, addressLine1: string, addressLine2: string
    , locality: string, landmark: string, city: string, state: string, country: string, postcode: string): void {

    firstName = firstName.trim();
    lastName = lastName.trim();
    emailId = emailId.trim();
    password = password.trim();
    mobileNumber = mobileNumber.trim();
    addressLine1 = addressLine1.trim();
    addressLine2 = addressLine2.trim();
    locality = locality.trim();
    landmark = landmark.trim();
    city = city.trim();
    state = state.trim();
    country = country.trim();
    postcode = postcode.trim();


    var addressInfo = new Address(addressLine1, addressLine2, locality, landmark, city, state, country, postcode);

    if (!firstName && !lastName && !emailId && !password) { return; }

    var customer = new Customer(firstName, lastName, emailId, mobileNumber, password, addressInfo);


    this.customerService.addCustomer(customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }

  delete(customer: Customer): void {
    this.customers = this.customers.filter(h => h !== customer);
    this.customerService.deleteCustomer(customer).subscribe();
  }
}

