// define GraphQL schema and resolvers
const typeDefs = `
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
