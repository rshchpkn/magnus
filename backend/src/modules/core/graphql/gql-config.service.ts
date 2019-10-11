import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';

import { getFields } from '../../shared/utils/get-fields';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {

  createGqlOptions(): GqlModuleOptions {
    return {
      autoSchemaFile: 'schema.gql',
      uploads: true,
      introspection: true,
      installSubscriptionHandlers: true,
      playground: true,
      fieldResolverEnhancers: ['guards'],
      formatError(err: any) {
        if (typeof err.message.message === 'object') {
          // class-validator errors
          const fields = getFields(err.message.message);

          return {
            fields,
            statusCode: err.message.statusCode,
            message: err.message.error,
          };
        } else if (typeof err.message === 'object') {
          // http errors
          return {
            statusCode: err.message.statusCode,
            message: err.message.message || err.message.error,
          };
        } else if (typeof err.message === 'string') {
          // graphql errors
          return {
            message: err.message,
          };
        }

        return err;
      },
      extensions: [],
    };
  }
}
