import { Global, Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '../config/config.module';
import { HealthModule } from '../health/health.module';

const modules = [
  ConfigModule,
  AuthModule,
  HealthModule,
];

@Global()
@Module({
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {
}
