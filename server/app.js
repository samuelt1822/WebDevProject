module.exports=function (app) {

  require('./services/user.service.server')(app);
  require('./services/wishlist.service.server')(app);
  /*require("./services/page.service.server.js")(app);
  require("./services/widget.service.server.js")(app);*/

}
