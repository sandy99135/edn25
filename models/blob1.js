var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blobSchema1 = new Schema({
  _id:Number,
  nom: String,
  prenom: String,
  numero:Number,
  message:String,
});


module.exports = mongoose.model('Sujet1', blobSchema1);