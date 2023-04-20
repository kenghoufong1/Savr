const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  Posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

const User = model('User', userSchema);

module.exports = User;