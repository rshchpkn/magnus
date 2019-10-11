import { Module} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { SharedModule } from '../shared/shared.module';

import { GqlConfigService } from './graphql/gql-config.service';

@Module({
  imports: [
    SharedModule,
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
  ],
})

export class CoreModule {
}
