import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';

import environment from '../.env'

const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      return console.log(`GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }
  
  if (networkError) {
    console.log(`Network error: ${networkError}`);
  }
});

const httpLink = new HttpLink({ uri: environment.APP_API_ENDPOINT });
const link = ApolloLink.from([errorMiddleware, httpLink]);

export default link;