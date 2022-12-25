import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_USERS = gql`
  query {
    users {
      id
      name
      avatar
      email
      address
    }
  }
`;

function UsersList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>
          <p>{user.name}</p>
          <p>{user.avatar}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
