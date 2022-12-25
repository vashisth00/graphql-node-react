import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
      authorization: localStorage.getItem('token'),
      "Allow-Control-Allow-Origin": "* ",
      "Access-Control-Allow-Origin": "*",
    },

  }),
});

export default client;
