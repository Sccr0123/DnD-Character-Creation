const sequelize = require("../config/connection");
const { Character } = require("../models");

const characterdata = [
	{
		name: "Frodo Baggins",
		level: 4,
		class: "Rogue",
		race: "Human",
		str: 8,
		dex: 16,
		con: 14,
		int: 10,
		wis: 12,
		cha: 10,
		user_id: 1,
	},
	{
		name: "Legolas",
		level: 9,
		class: "Ranger",
		race: "Elf",
		str: 12,
		dex: 18,
		con: 10,
		int: 12,
		wis: 14,
		cha: 12,
		user_id: 2,
	},
	{
		name: "Gandalf",
		level: 7,
		class: "Wizard",
		race: "Unknown",
		str: 8,
		dex: 8,
		con: 10,
		int: 20,
		wis: 14,
		cha: 12,
		user_id: 3,
	},
	{
		name: "Gimli",
		level: 7,
		class: "Fighter",
		race: "Dwarf",
		str: 14,
		dex: 8,
		con: 16,
		int: 12,
		wis: 12,
		cha: 8,
		user_id: 4,
	},
];

const seedCharacters = () => Character.bulkCreate(characterdata);

module.exports = seedCharacters;
