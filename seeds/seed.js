const sequelize = require("../config/connection");
const { User, Recipe } = require("../models");

const userData = require("./userData.json");
const recipeData = require("./recipeData.json");

const seedData = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const recipes = await Recipe.bulkCreate(recipeData, {});
  
  console.log('working')
  
  process.exit(0);
};

seedData();
