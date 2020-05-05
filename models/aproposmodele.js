var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fabienSchema = new Schema({
  _id:Number,
  apropos1: String,
  apropos2: String,
  apropos3: String,
  apropos4: String,
  apropos5: String,
  apropos6: String,
 
});


module.exports = mongoose.model('Apropos', fabienSchema);