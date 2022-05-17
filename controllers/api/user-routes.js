const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

// /api/users

// GET all
router.get("/", (req, res) => {
	User.findAll({
		attributes: { exclude: ["password"] },
	})
		.then((dbUserData) => res.json(dbUserData))
		.catch((err) => res.status(500).json(err));
});

// GET one
router.get("/:id", (req, res) => {
	User.findOne({
		where: {
			id: req.params.id,
		},
		attributes: { exclude: ["password"] },
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(400).json({ message: "No user found with this id" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => res.status(500).json(err));
});

// POST user
router.post("/", (req, res) => {
	User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	})
		.then((dbUserData) => res.json(dbUserData))
		.catch((err) => res.status(500).json(err));
});

// DELETE user
router.delete("/:id", (req, res) => {
	User.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.json("User Deleted!");
		})
		.catch((err) => res.status(500).json(err));
});

//Login
router.post("/login", (req, res) => {
	// expects {email: 'lernantino@gmail.com', password: 'password1234'}
	User.findOne({
		where: {
			email: req.body.email,
		},
	}).then((dbUserData) => {
		if (!dbUserData) {
			res.status(400).json({
				message: "No user with that email address!",
			});
			return;
		}

		const validPassword = dbUserData.checkPassword(req.body.password);
		console.log(validPassword);

		if (!validPassword) {
			res.status(400).json({ message: "Incorrect password!" });
			return;
		}

		req.session.save(() => {
			req.session.user_id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;

			res.json({ user: dbUserData, message: "You are now logged in!" });
		});
	});
});

//Logout
router.post("/logout", (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
