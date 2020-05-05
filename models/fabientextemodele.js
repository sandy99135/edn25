var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fabienSchema = new Schema({
  _id:Number,
  texte1: String,
  texte2: String,
  texte3: String,
 
});


module.exports = mongoose.model('Fabientexte', fabienSchema);
