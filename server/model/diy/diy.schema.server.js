var mongoose = require('mongoose');

var diySchema = mongoose.Schema(
  {
    name: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    description: String,
    cost: String,
    difficulty: String,
    toolsNeeded: String,
    supplies: String,
    url: String,
    dateCreate: {type: Date, default: Date.now()}

  }, {collection: 'DIY'}
);

module.exports = diySchema;

