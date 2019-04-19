module.exports = function (app) {
  var wishListModel = require('../model/wishlist/wishlist.model.server');

  /*HTTP methods for websites below*/
  app.post("/api/user/:userId/wishList", createWishListItem);
  app.get("/api/user/:userId/wishList", findAllWishListItemsForUser);
  app.get("/api/wishList/:wishListId", findWishListItemById);
  //app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/wishList/:wishListId", deleteWishListItem);


  function createWishListItem(req, res){
    const userId = req.params['userId'];
    const wishItem = req.body;
    console.log(wishItem);
    wishListModel.createWishListItem(userId, wishItem)
      .then(
        function(wishItem){
          res.send(wishItem);
        }, function(error){
          res.status(400).send("Error creating wishList Item:" + error);
        }
      );
  }
  function findAllWishListItemsForUser(req, res){
    const userId = req.params['userId'];
    wishListModel.findAllWishListItemsForUser(userId)
      .then(
        function (wishItems) {
          res.status(200).send(wishItems);
        }, function (error) {
          res.status(400).send(error);
        }
      );
  }

  function findWishListItemById(req,res){
    var wishListId = req.params['wishListId'];
    wishListModel.findWishListItemById(wishListId)
      .then(
        function(wishList){
          res.send(wishList);
        }, function (error) {
          res.status(400).send(error);
        }
      )
  }

  /*function updateWebsite(req, res){
    const websiteId = req.params['websiteId'];
    var updatedWebsite = req.body;
    websiteModel.updateWebsite(websiteId,updatedWebsite)
      .then(
        function (website) {
          res.send(website);
        }, function (error) {
          res.status(400).send(error);
        }
      );

  }*/
  function deleteWishListItem(req, res){
    const wishListId = req.params['wishListId'];
    wishListModel.deleteWishListItem(wishListId)
      .then(
        function (wishList) {
          res.json(wishList);
        }, function (error) {
          res.status(400).send(error);
        }
      );
  }
}
