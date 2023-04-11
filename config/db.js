const Sequelize = require('sequelize');
const db = new Sequelize('akshit', 'akshit', 'Aks@hit1', {
  host: 'localhost',
  dialect: 'postgres'
});
module.exports = db;