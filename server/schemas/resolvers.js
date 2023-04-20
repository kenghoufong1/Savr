const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, args) => {
      const { _id, username } = args;
      return User.findOne().populate({_id}).populate('posts')
    },
    me: async ( parent, args, context) => {
      if (context.user) {
        return User.findOne({_id: context.user._id }).populate('posts');          
      }
      throw new AuthenticationError('You need to be logged in')
    }
  },
  Mutation: {
    savePost: async ( parent, args, context ) => {
      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: context.user._id},
          { $addToSet: { savedPosts: args}},
          { new: true, runValidators: true }
        )
      }
    },
    removePost: async ( parent, {postId}, context ) => {
        console.log(postId);

        return await User.findByIdAndUpdate(
          { _id: context.user._id},
          { $pull: { savedPosts: { postId: postId } } },
          { new: true }
        );
      }
    },
    adduser: async ( parent, {username, email, password }, context ) => {
      const user = await User.create({username, email, password });
      const token = signToken(user);

      return {token, user}
    },
    login: async ( parent, { email, password }, context ) => {
      const user = await User.findOne({email});

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
       const corretPw = await user.isCorrectPassword(password);

       if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
       }

       const token = signToken(user);

       return { token, user }
    },
  };

module.exports = resolvers;
