import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    public readonly repo: Repository<Customer>,
  ) { }

  async create(input: CreateCustomerInput) {
    return this.repo.create(input).save();
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: string) {
    return await this.repo.findOneBy({ id });
  }

  async findbyEmail(email: string) {
    return await this.repo.findOneBy({ email });
  }

  async update(id: string, input: UpdateCustomerInput) {
    const customer = await this.repo.findOneBy({ id });

    if (customer) {
      Object.assign(customer, input);

      return customer.save();
    } else {
      return null;
    }
  }

  async remove(id: string) {
    return (await this.findOne(id)).remove();
  }
}
