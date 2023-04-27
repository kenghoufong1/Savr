import { gql } from '@apollo/client';

export const SAVE_DEAL_MUTATION = gql`
  mutation AddDeal($userId: ID!, $product: String!, $location: String!, $originalPrice: Float!, $salePrice: Float!, $description: String!, $image: String!) {
    addDeal(userId: $userId, product: $product, location: $location, originalPrice: $originalPrice, salePrice: $salePrice, description: $description, image: $image) {
      id
      product
      location
      originalPrice
      salePrice
      description
      image
    }
  }
`;

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
  mutation addPost($location: String!, $product: String!, $salePrice: Int!, $ $postAuthor: ID!) {
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
  mutation savePost($postID: ID!) {
    savePost(postID: $postID) {
      token
      user{
        savedPosts
      }
    }
  }
`;

export const REMOVE_SAVED_POST = gql`
  mutation removeSavedPost($postID: ID!) {
    removeSavedPost(postID: $postID) {
      token
      user{
        savedPosts
      }
    }
  }
`;