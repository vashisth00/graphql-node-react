// just for reference

// mutation {
//   createUser(name: "Alice", avatar: "https://example.com/alice.jpg", email: "alice@example.com", address: "123 Main Street") {
//     id
//     name
//     avatar
//     email
//     address
//   }
//   createUser(name: "Bob", avatar: "https://example.com/bob.jpg", email: "bob@example.com", address: "456 Market Street") {
//     id
//     name
//     avatar
//     email
//     address
//   }
//   createUser(name: "Charlie", avatar: "https://example.com/charlie.jpg", email: "charlie@example.com", address: "789 Park Avenue") {
//     id
//     name
//     avatar
//     email
//     address
//   }
// }


// Get a list of users

// query {
//   users {
//     id
//     name
//     avatar
//     email
//     address
//   }
// }
// Get a single user by ID

// query {
//   user(id: 1) {
//     id
//     name
//     avatar
//     email
//     address
//   }
// }
// Search users by name

// query {
//   users(name: "Alice") {
//     id
//     name
//     avatar
//     email
//     address
//   }
// }
// Get the count of users

// query {
//   usersCount
// }