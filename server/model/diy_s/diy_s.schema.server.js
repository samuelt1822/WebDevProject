var mongoose = require('mongoose');

var diy_sSchema = mongoose.Schema(
  {
    name: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    description: String,
    category: String,
    cost: String,
    difficulty: String,
    itemsNeeded: String,
    dateCreate: {type: Date, default: Date.now()}

  },{collection: 'DIYs'}
);

module.exports = diy_sSchema;
//would like to add in image
