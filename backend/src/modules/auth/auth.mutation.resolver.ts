import { Args, Mutation, ResolveProperty, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { LinkedinAuthInput } from './dto/linkedin-auth.input';
import { AuthMutation } from './models/auth.mutation.model';

@Resolver(of => AuthMutation)
export class AuthMutationResolver {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Mutation(of => AuthMutation)
  async auth() {
    return {};
  }

  @ResolveProperty()
  async linkedinSignIn(
    @Args('input') input: LinkedinAuthInput,
  ) {
    return this.authService.linkedinSignIn(input);
  }
}
