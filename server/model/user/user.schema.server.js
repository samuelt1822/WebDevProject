var mongoose = require('mongoose');
var wishListSchema = require('../wishlist/wishlist.schema.server')
/*var diy_sSchema = require()*/

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

    dateCreated: {type: Date, default: Date.now()}},
  {collection: 'Users'});

module.exports = userSchema;
//add in Cart if time */
