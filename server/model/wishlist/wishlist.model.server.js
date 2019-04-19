var mongoose = require('mongoose');
var wishListSchema = require('./wishlist.schema.server');
var wishListModel = mongoose.model("WishList",wishListSchema);

var userModel = require('../user/user.model.server');

wishListModel.createWishListItem = createWishListItem;
wishListModel.findWishListItemById = findWishListItemById;
wishListModel.findAllWishListItemsForUser = findAllWishListItemsForUser;
// wishListModel.updateWebsite = updateWebsite; - not necessary because you can't update the wishList items
wishListModel.deleteWishListItem = deleteWishListItem;


module.exports = wishListModel;


function createWishListItem(userId,wishListItem) {

  return wishListModel.create(wishListItem)
    .then(
      function (wishListItem) {
        userModel.findUserById(userId)
          .then(
            function (user) {
              user.wishListItems.push(wishListItem);
              userModel.updateUser(userId,user);
            }
          );
        return wishListItem;
      }
    )
}

function findAllWishListItemsForUser(userId) {
  return wishListModel.find({userId:userId});
}

function findWishListItemById(wishId) {
  return wishListModel.findById(wishId);
}

/*function updateWebsite(webId,website) {
  return websiteModel.findByIdAndUpdate(webId,website);
}*/

function deleteWishListItem(wishId){
  return wishListModel.findByIdAndRemove(wishId);
}
