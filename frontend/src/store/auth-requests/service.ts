import { execute } from 'apollo-link';
import gql from 'graphql-tag';

import { from, Subscribable } from 'rxjs';

import link from '../../graphql/link';
import { GraphQLResponse } from '../../shared/types/graphql';
import { User } from '../../shared/interfaces/user';

import { responseInterceptor } from '../utils/response-interceptor';


class AuthRequestsService {

  linkedinSignIn(input: {code: string, redirectUri: string}) {
    const operation = {
      query: gql`
        mutation linkedinSignIn($input: LinkedinAuthInput!) {
          auth {
            linkedinSignIn(input: $input) {
              _id,
              firstName,
              lastName,
              email,
              avatar
            }
          }
        }
      `,
      variables: { input },
    };

    return from((execute(link, operation) as unknown) as Subscribable<GraphQLResponse<{ linkedinSignIn: User }>>).pipe(
      responseInterceptor<User>('auth', 'linkedinSignIn'),
    );
  }
}

export const authRequestsService = new AuthRequestsService();
