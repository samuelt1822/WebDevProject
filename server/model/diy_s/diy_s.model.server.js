var mongoose = require('mongoose');
var diy_sSchema = require('.diy_s.schema.server.js');
var diy_sModel = mongoose.model("DIYs",diy_sSchema);


/*var userModel = require('../user/user.model.server');

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;


module.exports = diy_sModel;


function createWebsite(userId,website) {

  return websiteModel.create(website)
    .then(
      function (website) {
        userModel.findUserById(userId)
          .then(
            function (user) {
              user.websites.push(website);
              userModel.updateUser(userId,user);
            }
          );
        return website;
      }
    )
}

function findAllWebsitesForUser(userId) {
  return websiteModel.find({developerId:userId});
}

function findWebsiteById(webId) {
  return websiteModel.findById(webId);
}

function updateWebsite(webId,website) {
  return websiteModel.findByIdAndUpdate(webId,website);
}

function deleteWebsite(webId){
  return websiteModel.findByIdAndRemove(webId);
}*/
