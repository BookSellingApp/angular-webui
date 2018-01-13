import {Address} from "./Address";

export class Customer {

  id: string;

  firstName: string;

  lastName: string;

  emailId: string;

  mobileNumber: string;

  password: string;

  address: Address;

  constructor(firstName: string, lastName: string, emailId: string, mobileNumber: string, password: string, address: Address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.mobileNumber = mobileNumber;
    this.address = address;
    this.password = password;
  }
}
