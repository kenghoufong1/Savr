const { Post, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    posts: async (parent, { userId }) => {
      const params = userId ? { userId } : {};
      return Post.find(params);
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts').populate('savedPosts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password, profilePicture }) => {
      const user = await User.create({ username, email, password, profilePicture });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { location, product, regPrice, salePrice, image, dealDuration, description }, context) => {
      if (context.user) {
        const post = await Post.create({
          location: location,
          store: store,
          product: product,
          regPrice: regPrice,
          salePrice: salePrice,
          image: image,
          dealDuration: dealDuration,
          description: description,
          postAuthor: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { Posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    savePost: async (parent, { postId }, context) => {
      if (context.user) {

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedPosts: postId } }
        )
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeSavedPost: async (parent, { postId }, context) => {
      console.log("hit resolver");
      if (context.user) {
      return await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedPosts: postId } }
      );
    }
    throw new AuthenticationError('You need to be logged in!');
  }}
}

module.exports = resolvers;