const sequelize = require("");
const { User, Recipe } = require("../models");

const userData = require("./userData.json");
const chickenData = require("./recipeData.json");

seedDb = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const recipes = await Recipe.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true,
  });
};

seedDb();
