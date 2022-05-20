const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class Character extends Model {}

// create fields/columns for User model
Character.init(
	{
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
			defaultValue: 1,
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
		user_id: {
			type: DataTypes.INTEGER,
			// allowNull: false,
			references: {
				model: "users",
				key: "id",
			},
		},
	},
	{
		// table config
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "characters",
	}
);

module.exports = Character;
