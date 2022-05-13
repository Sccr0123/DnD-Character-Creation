const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Character, User } = require("../../models");
// const withAuth = require("../../utils/auth");

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
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// router.post("/", withAuth, (req, res) => {
// 	// expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
// 	Post.create({
// 		title: req.body.title,
// 		content: req.body.content,
// 		post_url: req.body.post_url,
// 		user_id: req.session.user_id,
// 	})
// 		.then((dbPostData) => res.json(dbPostData))
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

// router.put("/:id", withAuth, (req, res) => {
// 	Post.update(
// 		{
// 			title: req.body.title,
// 		},
// 		{
// 			where: {
// 				id: req.params.id,
// 			},
// 		}
// 	)
// 		.then((dbPostData) => {
// 			if (!dbPostData) {
// 				res.status(404).json({ message: "No post found with this id" });
// 				return;
// 			}
// 			res.json(dbPostData);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

// router.delete("/:id", withAuth, (req, res) => {
// 	console.log("id", req.params.id);
// 	Post.destroy({
// 		where: {
// 			id: req.params.id,
// 		},
// 	})
// 		.then((dbPostData) => {
// 			if (!dbPostData) {
// 				res.status(404).json({ message: "No post found with this id" });
// 				return;
// 			}
// 			res.json(dbPostData);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

module.exports = router;
