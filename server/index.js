// server.js

import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { makeExecutableSchema } from "@graphql-tools/schema";


const app = express();

// define GraphQL schema and resolvers
const typeDefs =`
  type User {
    id: ID!
    name: String!
    avatar: String
    email: String!
    address: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String!, avatar: String, email: String!, address: String): User
    updateUser(id: ID!, name: String!, avatar: String, email: String!, address: String): User
    deleteUser(id: ID!): User
  }
`;

const resolvers = {
  Query: {
    users: (_, __, { dataSources }) => dataSources.userAPI.users(),
  },
  Mutation: {
    createUser: (_, { name, avatar, email, address }, { dataSources }) =>
      dataSources.userAPI.createUser({ name, avatar, email, address }),
    updateUser: (_, { id, name, avatar, email, address }, { dataSources }) =>
      dataSources.userAPI.updateUser({ id, name, avatar, email, address }),
    deleteUser: (_, { id }, { dataSources }) => dataSources.userAPI.deleteUser({ id }),
  },
};


// create GraphQL schema
const schema = makeExecutableSchema({ typeDefs, resolvers });


app.use('/graphql', graphqlHTTP({
    schema, 
    context: ({ req }) => { 
        const token = req.headers.authorization || '';  
        return { token };   
    },  
    graphiql: true, 
}));        


app.listen(4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');   
}); 


// Path: server/dataSources/userAPI.js
// server.js
