module.exports = function (app) {
  var diyModel = require('../model/diy/diy.model.server');

  /*HTTP methods for websites below*/
  app.post("/api/user/:userId/diy", createDIYPost);
  app.get("/api/user/:userId/diy", findAllDIYsForUser);
  app.get("/api/diy/:diyId", findDIYById);
  app.put("/api/diy/:diyId", updateDIY);
  app.delete("/api/diy/:diyId", deleteDIY);

  function createDIYPost(req, res){
    const userId = req.params['userId'];
    const diy = req.body;
    console.log(diy);
    diyModel.createDIYPost(userId, diy)
      .then(
        function(diy){
          res.send(diy);
        }, function(error){
          res.status(400).send("Error creating diy post:" + error);
        }
      );
  }
  function findAllDIYsForUser(req, res){
    const userId = req.params['userId'];
    diyModel.findAllDIYsForUser(userId)
      .then(
        function (diy) {
          res.status(200).send(diy);
        }, function (error) {
          res.status(400).send(error);
        }
      );
  }

  function findDIYById(req,res){
    var diyId = req.params['diyId'];
    diyModel.findDIYById(diyId)
      .then(
        function(diy){
          res.send(diy);
        }, function (error) {
          res.status(400).send(error);
        }
      )
  }

  function updateDIY(req, res){
    const diyId = req.params['diyId'];
    var updatedDiyPost = req.body;
    diyModel.updateDIY(diyId,updatedDiyPost)
      .then(
        function (diy) {
          res.send(diy);
        }, function (error) {
          res.status(400).send(error);
        }
      );
  }
  function deleteDIY(req, res){
    const diyId = req.params['diyId'];
    diyModel.deleteDIY(diyId)
      .then(
        function (diy) {
          res.send(diy);
        }, function (error) {
          res.status(400).send(error);
        }
      );
  }
}
