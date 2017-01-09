var mongoose= require('mongoose');
var Schema= mongoose.Schema;

// the Schema in my database
var petSchema= new Schema({
  petName: String,
  animalType: String,
  age: Number,
  imageUrl: String
});

var pets= mongoose.model('pet', petSchema);

module.exports= pets;
