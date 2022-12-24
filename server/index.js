// server.js

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import axios from 'axios';
import { makeExecutableSchema } from "@graphql-tools/schema";

const app = express();
const API_URL = 'https://608b7a57737e470017b74d29.mockapi.io/api/v1';

class UserAPI {
  async getUsers() {
    const { data } = await axios.get(`${API_URL}/users`);
    return data;
  }

    async getUserById(id) {
    const { data } = await axios.get(`${API_URL}/users/${id}`); 
    return data;    
    }   

    async searchUsers(name) {   
    const { data } = await axios.get(`${API_URL}/users?name=${name}`);  
    return data;    
    }   

  async createUser(user) {
    const { data } = await axios.post(`${API_URL}/users`, user);
    return data;
  }

  async updateUser(user) {
    const { data } = await axios.put(`${API_URL}/users/${user.id}`, user);
    return data;
  }

  async deleteUser(id) {
    const { data } = await axios.delete(`${API_URL}/users/${id}`);
    return data;
  }
}

export var userAPI = new UserAPI();
// create GraphQL schema
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
    getUserById(id: ID!): User  
    usersCount: Int
    searchUsers(name: String!): [User]
  }

  type Mutation {
    createUser(name: String!, avatar: String, email: String!, address: String): User
    updateUser(id: ID!, name: String!, avatar: String, email: String!, address: String): User
    deleteUser(id: ID!): User
  }
`;
const resolvers = {
    Query: {
        users: () => userAPI.getUsers(),
        getUserById: (_, { id }) => userAPI.getUserById(id),
        usersCount: () => userAPI.getUsers().then(users => users.length),
        searchUsers: (_, { name }) => userAPI.searchUsers(name),
    },
    Mutation: {
        createUser: (_, args) => userAPI.createUser(args),
        updateUser: (_, args) => userAPI.updateUser(args),
        deleteUser: (_, { id }) => userAPI.deleteUser(id),
    },
};


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

