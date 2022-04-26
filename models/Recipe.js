const { Model, DataTypes } = require('');
const sequelize = require('');

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipe_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipe_ingredients: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        },
);

module.exports = Recipe;