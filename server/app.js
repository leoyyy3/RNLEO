const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')
const fs = require('fs')

const User = require('./models/User')

const Sequelize = require('sequelize');
const config = require('./config')

const controller = require('./controller')

const app = new	Koa()

app.use(bodyParser())

app.use(controller())
app.listen(8000);
console.log('server is started')







/*---------------------------------------*/

// return

// User.sync()

// let now = Math.ceil(Math.random()*40);
// User.create({
//     id: now,
//     username: 'Odie',
//     age: 22,
// });

// (async () => {
// 	let now = Math.ceil(Math.random()*40);
//     let person = await User.create({
//         id: now,
//         username: 'Odie',
//         age: 22,
//     });
//     console.log('created: ' + JSON.stringify(person));
// })();

return

(async () => {
    let users = await User.findAll({
        where: {
            username: 'Odie'
        }
    });
    // console.log('------',JSON.stringify(users))
    // console.log(`find ${pets.length} pets:`);
    // for (let p of pets) {
    //     console.log(JSON.stringify(p));
    // }
})();

return

var seque = new Sequelize(config.database,config.username,config.password,{
	host:config.host,
	port:config.port,
	dialect:'mysql',
	pool:{
		max:5,
		min:1,
		idle:30000
	}
})

var Pet = seque.define('tb1s',{
	username:{
		type:Sequelize.STRING(20)
	},
	age:Sequelize.INTEGER,
	// salary:Sequelize.FLOAT(8,2)
},{
	freezeTableName:true,
	timestamps:false
});

// (async () => {
// 	let now = Math.ceil(Math.random()*40);
//     let dog = await Pet.create({
//         id: now,
//         username: 'Odie',
//         age: 22,
//     });
//     console.log('created: ' + JSON.stringify(dog));
// })();

(async () => {
    var pets = await Pet.findAll({
        where: {
            username: 'tom'
        }
    });
    console.log('------',JSON.stringify(pets))
    // console.log(`find ${pets.length} pets:`);
    // for (let p of pets) {
    //     console.log(JSON.stringify(p));
    // }
})();



