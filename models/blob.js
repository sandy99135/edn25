var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blobSchema = new Schema({
  _id:Number,
  nom: String,
  prenom: String,
  numero:Number,
  email:String,
  sujet:String,
  message:String,
  password:String
});


module.exports = mongoose.model('Sujet', blobSchema);
