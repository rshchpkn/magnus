import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HealthResolver {
  @Query(of => Boolean)
  async healthCheck() {
    return true;
  }
}
