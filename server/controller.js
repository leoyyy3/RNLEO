const fs = require('fs')

function addController(router,dir){
	var files = fs.readdirSync(__dirname + '/controllers')

	// console.log('files',files)

	var js_files = files.filter((f)=>{
		return f.endsWith("js")
	})

	js_files.forEach(item=>{
		let mapping = require(__dirname + '/controllers/' + item)
		addMapping(router,mapping)
	})
}

function addMapping(router,mapping){
	for(let url in mapping){
		if(url.startsWith("GET")){
			let path = url.substring(4);
			// console.log('path',path)
			router.get(path,mapping[url])
		}else if(url.startsWith('POST')){
			let path = url.substring(5);
			// console.log('post',path)
			router.post(path,mapping[url])
		}else{
			console.log('404')
		}
	}
}

module.exports = function(dir){
	let controllers_dir = dir || "controllers",
		router = require('koa-router')();

	addController(router,controllers_dir)
	return router.routes()
}