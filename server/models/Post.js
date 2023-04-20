const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  regPrice: {
    type: Number,
  },
  salePrice: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  description: 
    {
      type: String,
    },
    postAuthor: {
    type: String,
    required: true,
    trim: true,
    },
});

const Post = model('Post', postSchema);

module.exports = Post;
