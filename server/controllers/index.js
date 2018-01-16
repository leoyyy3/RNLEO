const fs = require('fs')
const User = require('../models/User')

var index = async (ctx,next)=>{
	var name = ctx.params.name;
	ctx.type = "html"
	ctx.response.body = fs.createReadStream('build/index.html')
}

var login = async (ctx,next)=>{
	let name = ctx.request.body.username || "";
	let pwd = ctx.request.body.password || "";

	let msg = "";
	let status = 0

	console.log('---------',ctx.request.body)
	if(!name){
		msg = "请填写用户名";
		status = 0
	}

	if(!pwd){
		msg = "请填写密码";
		status = 0
	}
	let result = [];

    let users = await User.findAll({
        where: {
            username: name
        }
    });
    
    result = JSON.stringify(users)

    if(!result.length){
    	msg = "用户不存在"
    	status = 0
    }else{
    	msg = "成功"
    	status = 1
    }

    ctx.response.body = {
    	msg:msg,
    	result:[],
    	status:status
    }	
}


module.exports = {
	'GET /': index,
	'GET /login': index,
	'GET /addUser': index,
	'POST /api/login':login
}