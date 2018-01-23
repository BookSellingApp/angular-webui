export class Address {

  id: string;

  addressLine1: string;

  addressLine2: string;

  locality: string;

  landmark: string;

  city: string;

  state: string;

  country: string;

  postalCode: string;

  constructor(addressLine1: string, addressLine2: string, locality: string,
     landmark: string, city: string, state: string, country: string, postalCode: string) {
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.locality = locality;
    this.landmark = landmark;
    this.city = city;
    this.state = state;
    this.country = country;
    this.postalCode = postalCode;
  }
}
