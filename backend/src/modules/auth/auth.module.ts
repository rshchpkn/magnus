import { HttpModule, Module } from '@nestjs/common';

import { AuthMutationResolver } from './auth.mutation.resolver';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { LinkedinService } from './linkedin.service';

@Module({
  imports: [
    HttpModule,
  ],
  providers: [
    AuthService,
    LinkedinService,
    AuthResolver,
    AuthMutationResolver,
  ],
  exports: [
    AuthService,
    LinkedinService,
  ],
})
export class AuthModule {
}
