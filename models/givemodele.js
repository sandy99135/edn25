var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var giveSchema = new Schema({
  _id:Number,
  nom: String,
  prenom: String,
  numero:Number,
  montant:Number,
  message:String,
});


module.exports = mongoose.model('Give', giveSchema);