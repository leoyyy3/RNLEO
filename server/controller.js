const fs = require('fs')
const multer = require('koa-multer');

var storage = multer.diskStorage({  
  //文件保存路径  
  destination: function (req, file, cb) {  
    cb(null, 'resource/images/')  
  },  
  //修改文件名称  
  filename: function (req, file, cb) {  
    var fileFormat = (file.originalname).split(".");  
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
  }  
})  
//加载配置  
var upload = multer({ storage: storage });  

function addController(router,dir){
	var files = fs.readdirSync(__dirname + '/controllers')

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
			router.get(path,mapping[url])
		}else if(url.startsWith('POST')){
			let path = url.substring(5);
			router.post(path,mapping[url])
		}else if(url.startsWith('UPLOAD')){
			let path = url.substring(7);
			// console.log('UPLOAD',path)
			router.post(path,upload.single('logo'),mapping[url])
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