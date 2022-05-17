const router = require("express").Router();
const sequelize = require("../config/connection");
const { Character, User } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
	console.log("======================");
	Character.findAll({
		attributes: [
			"id",
			"name",
			"class",
			"level",
			"str",
			"dex",
			"con",
			"int",
			"wis",
			"cha",
		],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbCharacterData) => {
			const characters = dbCharacterData.map((characters) =>
				characters.get({ plain: true })
			);

			res.render("homepage", {
				characters,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
