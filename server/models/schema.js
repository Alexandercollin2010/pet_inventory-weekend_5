var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var petSchema= new Schema({
  petName: String,
  animalType: String,
  age: Number,
  imageUrl: String
});

var pets= mongoose.model('pet', petSchema);

module.exports= pets;
