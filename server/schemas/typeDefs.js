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
    profilePicture: String
    email: String
    password: String
    posts: [Post]
    savedPosts: [Post]
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
    addPost(location: String!, product: String!, regPrice: Float, salePrice: Float!, image: String, dealDuration: Float, description: String): Post
    removePost(postId: ID!): Post
    savePost(postId: ID!): User
    removeSavedPost(postId: ID!): User
  }
`;

module.exports = typeDefs;