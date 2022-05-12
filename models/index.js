const User = require("./User");
const Character = require("./Character");

// // create associations below

User.hasMany(Character, {
	foreignKey: "user_id",
});

Character.belongsTo(User, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});

module.exports = { User, Character };
