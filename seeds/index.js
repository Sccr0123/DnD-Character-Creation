const seedUsers = require("./users");
const seedCharacters = require("./characters");

const sequelize = require("../config/connection");

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log("--------------");

	await seedUsers();
	console.log("--------------");

	await seedCharacters();
	console.log("--------------");

	process.exit(0);
};

seedAll();
