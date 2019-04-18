var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model("Users",userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUserName = findUserByUserName;
userModel.findByCredential = findByCredential;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.findFBUser = findFBUser;

module.exports = userModel;

function findFBUser(id) {
  return userModel.findOne({"facebook.id": id});
}

function createUser(user) {
  return userModel.create(user);
}

function findUserById(userID) {
  return userModel.findById(userID);
}

function findUserByUserName(userName) {
  return userModel.findOne({username:userName});
}

function findByCredential(userName,password){
  return userModel.findOne({username:userName,password:password});
}

function updateUser(userId,user) {
  return userModel.findByIdAndUpdate(userId,user);
}

function deleteUser(userId){
  return userModel.findByIdAndRemove(userId);
}

