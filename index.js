const mongoose = require('mongoose');


// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');


const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    //INSERT MULTIPLE FROM JSON
      return Recipe.insertMany(data)
  })
  .then((manyRecipes) => {
    console.log('Many recipes created', manyRecipes)
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
  })
  .then((updatedRecipe)=> {
    console.log('updated recipe', updatedRecipe)
  return Recipe.deleteOne({title: "Carrot Cake"})
  })
  .then((resultFromDeleteOne) => {
    console.log(resultFromDeleteOne)
  return mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });



//Creating Recipe

/*
Recipe.create({
  title: "Asian Glazed Chicken Thighs",
  ingredients: [
    "1/2 cup rice vinegar",
    "5 tablespoons honey",
    "1/3 cup soy sauce (such as Silver Swan®)",
    "1/4 cup Asian (toasted) sesame oil",
    "3 tablespoons Asian chili garlic sauce",
    "3 tablespoons minced garlic",
    "salt to taste",
    "8 skinless, boneless chicken thighs"
  ],
  cuisine: "Asian",
  dishtype: "main_course",
  image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
  duration: 40,
  creator: "Chef LePapu",
  created: '2020-11-05T10:18:10.498+00:00'
}).then((response) => {
  console.log('Cat Created', response);
}).catch((err) => {
  console.log("Error occured", err)
});

*/

/*
//INSERT MULTIPLE FROM JSON
Recipe.insertMany(data)
  .then((response) => {
    console.log('Cat Created', response);
  }).catch((err) => {
    console.log("Error occured", err)
  });
*/

//UPDATE  
//Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
  //.then((updateUser) => {
    //    console.log(`User got updated ${updateUser}`);
    //});