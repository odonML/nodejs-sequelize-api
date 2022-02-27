import 'dotenv/config';
import Sequelize from 'sequelize';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	dialect: DB_DIALECT,
	pool: {
		max: 5,
		min: 0,
		require: 30000,
		idle: 10000,
	},
	logging: false,
});
