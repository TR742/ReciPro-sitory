const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model { }

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
        recipe_ingredients: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipe_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipe_category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    recipe_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recipe_ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recipe_description: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    recipe_category: {
       type: DataTypes.STRING,
       allowNull: false,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  });


module.exports = Recipe;