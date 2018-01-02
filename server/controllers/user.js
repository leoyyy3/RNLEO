let path = require('path');
const User = require('../models/User')


let list = async (ctx,next)=>{
	
	let msg = "";
	let status = 0
	
	let result = [];

    let users = await User.findAll({
        where: {

            // username: name
        },
        order: 'updatedAt Desc'
    });
    
    // result = JSON.stringify(users)
    result = users

    if(!result.length){
    	msg = ""
    	status = 0
    }else{
    	msg = "成功"
    	status = 1
    }

    ctx.response.body = {
    	msg:msg,
    	result:result,
    	status:status
    }	
}

let add = async (ctx,next)=>{
    let msg = "";
    let status = 0

    let username = ctx.request.body.username || "";
    let age = ctx.request.body.age || "";
    let phone = ctx.request.body.phone || "";
    let userimg = ctx.request.body.userimg || "";

    let now = Math.ceil(Math.random()*40);

    let result = await User.create({
            id: now,
            username: username,
            age: age,
            phone : phone,
            userimg : userimg
        });

    status = result?1:0

    ctx.response.body = {
        msg:msg,
        result:result,
        status:status
    }
}

let deleteUser = async (ctx,next)=>{
    let msg = "";
    let status = 0;
    let result = []

    let id = ctx.request.body.id || "";
    
    let now = Math.ceil(Math.random()*40);

    let user = await User.findOne({
        where: {
            id: id
        }
    });

    if(!user){
        ctx.response.body = {
            msg:'用户不存在',
            result:result,
            status:0
        }
        return
    }


    let re = await user.destroy()

    ctx.response.body = {
        msg:'删除成功',
        result:result,
        status:1
    }
}

let update = async (ctx,next)=>{
    let msg = "";
    let status = 0

    let params = ctx.request.body || "";
    let id = ctx.request.body.id

    let user = await User.findOne({
        where: {
            id: id
        }
    });

    user.age = params.age;
    user.username = params.username;
    user.phone = params.phone;
    user.updatedAt = Date.now();
    user.version ++;
    let result = await user.save();

    // let result = await User.update({
    //         username: params.username,
    //         age: params.age,
    //         phone : params.phone,
    //     },{
    //         where:{id:id}
    //          id:id
    //     });
    //     
    status = 1

    ctx.response.body = {
        msg:msg,
        result:result,
        status:status
    }
}


let up = async (ctx,next)=>{
    let file = ctx.req.file
    let filename = "http://localhost:8000/"+file.path;
    ctx.body = {
        filename: filename,
        status:1
    }
}


module.exports = {
	'POST /api/getUserList' : list,
    'POST /api/updateUser' : update,
    'POST /api/addUser' : add,
    'UPLOAD /api/upload' : up,
    'POST /api/deleteUser' : deleteUser
}