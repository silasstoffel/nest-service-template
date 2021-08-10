import { Injectable } from '@nestjs/common';

import { Product } from '../interfaces/products.interface';

const products: Product[] = [
  {
    id: '9639b824-48b1-4df1-9ede-9aaed754999f',
    name: 'iPhone',
    description: 'iPhone Description',
    price: 7899.99,
  },
  {
    id: 'c3f1b796-77db-44ed-ad8c-4a569d215d8e',
    name: 'iPad',
    description: 'iPad Description',
    price: 7899.99,
  },
  {
    id: '3ab62e10-2724-4162-82d6-8d4360fbe36d',
    name: 'macBook Pro',
    description: 'iPad Description',
    price: 19799.99,
  },
  {
    id: 'e4fea8d2-f07d-49ab-90c4-c52788dcd4ab',
    name: 'Apple Watch',
    description: 'Watch Description',
    price: 4890.99,
  },
  {
    id: 'cb0ebd0a-6d74-4aaf-8b0b-ab4fcbd4794e',
    name: 'AirPods 2',
    description: 'AirPods Description',
    price: 1500.99,
  },
];

@Injectable()
export class ProductService {
  async findAll(): Promise<Product[]> {
    return products;
  }

  async findById(id: string): Promise<Product> {
    return products[0];
  }

  async create(product: Product): Promise<void> {
    products.push(product);
  }

  async update(product: Product, id: string): Promise<void> {
    products.push(product);
  }

  async remove(id: string): Promise<void> {
    //your rules
  }
}
