const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    _id: ID!
    location: String!
    product: String!
    regPrice: Float
    salePrice: Float!
    image: String
    dealDuration: Int
    description: String
    postAuthor: ID!
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(location: String!, product: String!, regPrice: Int, salePrice: Int, image: String, description: String, postAuthor: ID): Post
    removePost(postId: ID!): Post
    savePost(postId: ID!): User
    unsavePost(postId: ID!): User
  }
`;

module.exports = typeDefs;