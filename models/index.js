const User = require('./User')
const Recipe = require('./Recipe')

// Define the above associate from the opposite end. 
Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

// Define a User as having many Recipes
User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Recipe };