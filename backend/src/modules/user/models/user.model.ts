import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'User' })
export class User {

  @Field()
  readonly _id: string;

  @Field()
  readonly firstName: string;

  @Field()
  readonly lastName: string;

  @Field()
  readonly email: string;

  @Field()
  readonly avatar: string;
}
