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

// get single post
router.get("/characters/:id", (req, res) => {
	Character.findOne({
		where: {
			id: req.params.id,
		},
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
			if (!dbCharacterData) {
				res.status(404).json({
					message: "No Character found with this id",
				});
				return;
			}

			const character = dbCharacterData.get({ plain: true });

			res.render("single-character", {
				character,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}

	res.render("login");
});

router.get("/signup", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}

	res.render("signup");
});

module.exports = router;
