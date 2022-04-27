const User = require('./User')
const Recipe = require('./Recipe')

// Define a User as having one Recipe to create a foreign key in the 'recipe' table.
User.hasOne(Recipe, {
    foreignKey: 'user_id',
});

// Define the above associate from the opposite end. 
Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

// Define a User as having many Recipes
User.hasMany(Recipe, {
    foreignKey: 'user_id',
});

// Define the above association from the opposite end.
Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Recipe };

