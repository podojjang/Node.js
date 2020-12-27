const Sequelize = require('sequelize');
const User = require('./user');
//const Users = require('./user');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;

db.User = User;
//db.User = Users;
User.init(sequelize);
//Users.init(sequelize);
//User.associate(db);
//Users.associate(db);
module.exports = db;
