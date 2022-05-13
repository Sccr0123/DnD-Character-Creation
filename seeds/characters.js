const sequelize = require("../config/connection");
const { Character } = require("../models");

const characterdata = [
	{
		name: "Frodo Baggins",
		class: "Rogue",
		level: 4,
		str: 8,
		dex: 16,
		con: 14,
		int: 10,
		wis: 12,
		cha: 10,
		creator: 1,
	},
	{
		name: "Legolas",
		class: "Ranger",
		level: 9,
		str: 12,
		dex: 18,
		con: 10,
		int: 12,
		wis: 14,
		cha: 12,
		creator: 2,
	},
	{
		name: "Gandalf",
		class: "Wizard",
		level: 7,
		str: 8,
		dex: 8,
		con: 10,
		int: 20,
		wis: 14,
		cha: 12,
		creator: 3,
	},
	{
		name: "Gimli",
		class: "Fighter",
		level: 7,
		str: 14,
		dex: 8,
		con: 16,
		int: 12,
		wis: 12,
		cha: 8,
		creator: 4,
	},
];

const seedCharacters = () => Character.bulkCreate(characterdata);

module.exports = seedCharacters;
