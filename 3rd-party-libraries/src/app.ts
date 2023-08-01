import _ from 'lodash';
import 'reflect-metadata';
import 'es6-shim';
import { plainToClass } from 'class-transformer';
import {IsNotEmpty, IsNumber, IsPositive, validate} from 'class-validator';

// Lodash demo.
console.log(_.shuffle([1, 2, 3]));

// class-transformer demo.
export class Product {
    @IsNotEmpty()
    title: string;
    @IsNumber()
    @IsPositive()
    price: number;
  
    constructor(t: string, p: number) { 
      this.title = t;
      this.price = p;
    }
  
    getInformation() {
      return [this.title, `$${this.price}`];
    }
  }

const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 },
    { title: '', price: -10.99 }
  ];

const loadedProducts = plainToClass(Product, products);
for (let prod of loadedProducts) {
    validate(prod).then(errors => {
        if (errors.length > 0) {
            console.log('Validation errors!');
            console.log(errors);
        }
    });
    console.log(prod.getInformation());
}