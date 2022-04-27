const User = require('./User')
const Recipe = require('./Recipe')

// An Author can have many Recipes
User.hasMany(recipe, {

});

 module.exports = { User, Recipe };