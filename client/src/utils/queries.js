import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      profilePicture
      email
      posts {
        _id
        location
        store
        product
        regPrice
        salePrice
        image
        description
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      location
      store
      product
      regPrice
      salePrice
      image
      description
      postAuthor
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      location
      store
      product
      regPrice
      salePrice
      image
      description
      postAuthor
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      profilePicture
      email
      posts {
        _id
        location
        store
        product
        regPrice
        salePrice
        image
        description
      }
      savedPosts{
        _id
      }
    }
  }
`;
