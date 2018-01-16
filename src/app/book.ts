import {Stock} from "./stock";

export class Book {

  id: string;

  title: string;

  author: string;

  description: string;

  createdAt: Date;

  updatedAt: Date;

  imageUrl: string;

  cost: number;

  status: string;

  stock: Stock;

}
