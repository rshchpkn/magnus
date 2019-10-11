import { Field, ObjectType } from 'type-graphql';

import { User } from '../../user/models/user.model';

@ObjectType()
export class AuthMutation {
  @Field(type => User, {
    description: 'Sign in and get token',
  })
  readonly linkedinSignIn: User;
}
