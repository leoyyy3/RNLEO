const Sequelize = require('sequelize');
const defineModel = require('../db');

module.exports = defineModel('user',{
	username:{
		type:Sequelize.STRING(20)
	},
	age:Sequelize.INTEGER,
	phone:Sequelize.INTEGER,
	// salary:Sequelize.FLOAT(8,2)
},{
	freezeTableName:true,
	timestamps:false
});