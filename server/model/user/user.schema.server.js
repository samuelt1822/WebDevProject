var mongoose = require('mongoose');
var wishListSchema = require('../wishlist/wishlist.schema.server');
var diySchema = require('../diy/diy.schema.server');

var userSchema = new mongoose.Schema(
  {username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    facebook: {token: String, id: String,},
    phone: String,
    isSeller: Boolean,
    wishListItems: [wishListSchema],
    diyPosts: [diySchema],

    dateCreated: {type: Date, default: Date.now()}},
  {collection: 'Users'});

module.exports = userSchema;
