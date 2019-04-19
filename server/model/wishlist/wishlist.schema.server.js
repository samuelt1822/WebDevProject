var mongoose = require('mongoose');

var wishListSchema = mongoose.Schema(
  {
    name: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'WishlistModel'},
    cost: String,
    seller: String,
    dateCreate: {type: Date, default: Date.now()}

  },{collection: 'Wishlist'}
);

module.exports = wishListSchema;

//how can I do an image in the schema?
