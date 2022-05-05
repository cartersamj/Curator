const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema ({
  artistDisplayName: {type: String, required: true},
  title: {type: String, required: true},
  primaryImage: {type: String, required: true},
  medium: {type: String, required: true},
  artistBeginDate: {type: String},
  objectDate: {type: String},
  creditLine: {type: String},
  rating: {type: Number},
  userRating: {type: Number},
  userReview: {type: String},
  favorite: {type: Boolean},
  comments: [{body: String, user: String}]
})

module.exports = mongoose.model('Art', artSchema)