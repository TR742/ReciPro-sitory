const router = require("express").Router();
const { Recipe, User } = require('../models');

router.get("/", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    res.render("homepage", {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/recipe");
    return;
  }

  res.render("login");
});

module.exports = router;
