const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  author: {
    array: ['George R R Martin', 'Jane Austen'],
    type: array,
    required: true,
  },
  Summary: {
    type: String,
    required: true,
    minlength: 4,
  },
  ISBN: {
    type: String,
    required: true,
  },
  genre: {
    array: ['science fiction', 'fantasy', 'romance'],
    type: array,
  }
}, {timestamps: true});

module.exports = mongoose.model('Book', bookSchema);