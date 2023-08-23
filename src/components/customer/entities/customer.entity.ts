import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { customAlphabet } from 'nanoid';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@ObjectType('Customer')
@Entity('Customers')
export class Customer extends BaseEntity {
  @Field(() => ID, { description: 'Primary key of this field' })
  @PrimaryColumn('varchar', { name: 'id', length: 32 })
  id: string;

  @Field({ description: 'Name of the customer', nullable: false })
  @Column('varchar', { name: 'name', length: 80, nullable: false })
  name: string;

  @Field({ description: 'Last name of the customer', nullable: false })
  @Column('varchar', { name: 'lastName', length: 80, nullable: false })
  lastName: string;

  @Field(() => Int, { description: 'Age of the customer', nullable: false })
  @Column('int', { name: 'age', nullable: false })
  age: number;

  @Field({ description: 'Email of the customer', nullable: false })
  @Column('varchar', { name: 'email', length: 256, nullable: false })
  email: string;

  @BeforeInsert()
  generateKey() {
    this.id = customAlphabet(
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      32,
    )();
  }
}
