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

router.get("/createrecipe", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });

    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    const user = userData.get({ plain: true });

    res.render('createrecipe', {
      ...user,
      logged_in: true,
      recipes
    });
  } catch
  (err) {
    res.status(500).json(err)
  }
});

router.get('/recipes', async (req, res) => {
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

    res.render('recipe', {
      ...recipes,
      logged_in: req.session.logged_in
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
