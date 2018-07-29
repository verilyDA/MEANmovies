const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  name:{
    type: String,
    required: [true, 'provide a name for the reviewer'],
    trim: true,
    minlength: [3, 'too few charactrers in name']
  },
  stars: {
      type: Number,
      required: [true, "Please provide a star rating"],
      min: [1, 'too few stars for rating'],
      max: [5, 'too many stars for rating']
  },
  review: {
    type: String,
    required: [true, 'provide a review'],
    minlength: [3, 'too few characters for review']
  },
  for_movie: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Review', reviewSchema);