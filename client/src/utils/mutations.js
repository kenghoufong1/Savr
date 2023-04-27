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

// export const ADD_POST = gql`
//   mutation addPost($location: String!, $product: String!, $salePrice: Int!, $postAuthor: ID) {
//     addPost(location: $location, product: $product, salePrice: $salePrice, postAuthor: $postAuthor) {
//       _id
//       location
//       product
//       regPrice
//       salePrice
//       image
//       dealDuration
//       description
//       postAuthor
//     }
//   }
// `;

export const ADD_POST = gql`
  mutation addPost($location: String!, $product: String!, $regPrice: Float, $salePrice: Float!, $image: String, $dealDuration: Float, $description: String) {
    addPost(location: $location, product: $product, regPrice: $regPrice, salePrice: $salePrice, image: $image, dealDuration: $dealDuration, description: $description) {
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