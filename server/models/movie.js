const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  title:{
    type: String,
    required: [true, 'provide a title for the movie'],
    trim: true,
    unique: true,
    minlength: [3, 'too few characters for title']
  }
});

module.exports = mongoose.model('Movie', movieSchema);