const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
},
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
},
  ingredients: {
    type: [String],
},
  cuisine: {
    type: String,
},
  dishtype: {
  type: String,
},
  image: {
  type: String,
  default: '/images/someUserImage.jpg'
},
  duration: {
  type: Number,
},
  creator: {
  type: String,
},
  created: {
  type: Date,
},

//{timestamps:true}????
},{timestamps:true});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
