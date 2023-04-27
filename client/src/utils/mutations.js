import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($location: String!, $product: String!, $salePrice: Int!, $postAuthor: ID!) {
    addPost(location: $location, product: $product, salePrice: $salePrice, postAuthor: $postAuthor) {
      _id
      location
      product
      regPrice
      salePrice
      image
      dealDuration
      description
      postAuthor
    }
  }
`;

export const SAVE_POST = gql`
mutation savePost($postId: ID!) {
  savePost(postId: $postId) {
    _id
    savedPosts {
      _id
    }
  }
}
`;

export const REMOVE_SAVED_POST = gql`
  mutation removeSavedPost($postID: ID!) {
    removeSavedPost(postID: $postID) {
      id
      savedPosts {
        _id
      }
    }
  }
`;