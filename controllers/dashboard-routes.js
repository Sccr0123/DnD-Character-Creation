const router = require("express").Router();
const sequelize = require("../config/connection");
const { Character, User } = require("../models");

router.get("/", (req, res) => {
	console.log("======================");
	Character.findAll({
		where: {
			user_id: req.session.user_id,
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
			const characters = dbCharacterData.map((characters) =>
				characters.get({ plain: true })
			);

			res.render("dashboard", {
				characters,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/edit/:id", (req, res) => {
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

			const character = dbCharacterData.dataValues;

			res.render("edit-character", {
				character,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.put("/edit/:id", (req, res) => {
	Character.update(req.body, {
		individualHooks: true,
		where: {
			id: req.params.id,
		},
	})
		.then((dbCharacterData) => {
			if (dbCharacterData) {
				res.status(404).json({ message: "No character with this id" });
				return;
			}
			res.json(dbCharacterData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/new_character", (req, res) => {
	// res.render("creation", {
	// 	loggedIn: req.session.loggedIn,
	// });
	res.render("creation");
});

module.exports = router;
