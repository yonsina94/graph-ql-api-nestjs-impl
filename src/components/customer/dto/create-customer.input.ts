import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field({ description: 'Name of the customer' })
  name: string;

  @Field({ description: 'Last name of the customer' })
  lastName: string;

  @Field(() => Int, { description: 'Age of the customer' })
  age: number;

  @Field({ description: 'Email of the customer' })
  email: string;
}
