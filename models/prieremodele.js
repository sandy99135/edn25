var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var priereSchema = new Schema({
  _id:Number,
  nom: String,
  prenom: String,
  numero:Number,
  message:String,
});


module.exports = mongoose.model('priere', priereSchema);