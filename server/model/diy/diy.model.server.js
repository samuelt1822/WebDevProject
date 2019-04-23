var mongoose = require('mongoose');
var diySchema = require('./diy.schema.server');
var diyModel = mongoose.model("DIY", diySchema);

var userModel = require('../user/user.model.server');

diyModel.createDIYPost = createDIYPost;
diyModel.findDIYById = findDIYById;
diyModel.findAllDIYsForUser = findAllDIYsForUser;
diyModel.updateDIY = updateDIY;
diyModel.deleteDIY = deleteDIY;

module.exports = diyModel;

function createDIYPost(userId, diy) {
  return diyModel.create(diy)
    .then(
      function (diy) {
        userModel.findUserById(userId)
          .then(
            function (user) {
              user.diyPosts.push(diy);
              userModel.updateUser(userId,user);
            }
          );
        return diy;
      }
    )
}
function findAllDIYsForUser(userId) {
  return diyModel.find({userId:userId});
}
function findDIYById(diyId) {
  return diyModel.findById(diyId);
}
function updateDIY(diyId, diy) {
  return diyModel.findByIdAndUpdate(diyId, diy);
}
function deleteDIY(diyId) {
  return diyModel.findByIdAndRemove(diyId);
}

