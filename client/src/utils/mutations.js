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
  mutation addPost($location: String!, $product: String!, $regPrice: Int, $salePrice: Int, $image: String, $description: String, $postAuthor: Id ) {
    addPost(location: $location, product: $product, regPrice: $regPrice, salePrice: $salePrice, image: $image, description: $description, postAuthor: $postAuthor) {
      _id
      location
      product
      regPrice
      salePrice
      image
      description
      postAuthor
    }
  }
`;