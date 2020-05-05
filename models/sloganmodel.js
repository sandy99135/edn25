var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sloganSchema = new Schema({
  _id:Number,
  slogan1: String,
  slogan2: String,
 
});


module.exports = mongoose.model('Slogan', sloganSchema);
