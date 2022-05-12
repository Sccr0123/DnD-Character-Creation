const { Model } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class Character extends Model {}

// create fields/columns for User model
Character.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	class: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	level: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	str: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	dex: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	con: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	int: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	wis: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	cha: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	creator: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: "user",
			key: "id",
		},
	},
});

module.exports = Character;
