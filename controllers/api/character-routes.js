const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Character, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all characters
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
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
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
			res.json(dbCharacterData);
			// res.render('character-info', {
			// 	dbCharacterData,
			// 	loggedIn: req.session.logg
			// });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post("/", withAuth, (req, res) => {
	Character.create({
		name: req.body.name,
		class: req.body.charClass,
		level: req.body.level,
		str: req.body.str,
		dex: req.body.dex,
		con: req.body.con,
		int: req.body.int,
		wis: req.body.wis,
		cha: req.body.cha,
		user_id: req.session.user_id,
	})
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.put("/:id", withAuth, (req, res) => {
	Character.update(
		{
			name: req.body.name,
			class: req.body.charClass,
			level: req.body.level,
			str: req.body.str,
			dex: req.body.dex,
			con: req.body.con,
			int: req.body.int,
			wis: req.body.wis,
			cha: req.body.cha,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	)
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({
					message: "No Character found with this id",
				});
				return;
			}
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.delete("/:id", withAuth, (req, res) => {
	Character.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({
					message: "No Character found with this id",
				});
				return;
			}
			res.json("Character Deleted!");
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
