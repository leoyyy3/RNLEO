var login = async (ctx,next)=>{
	ctx.response.body = `<h1>index</h1>
		<form action="/login" method="post">
			<p>name:<input type="text" name="name"></p>
			<p>pwd:<input type="password" name="pwd"></p>
			<p><input type="submit" value="提交"/></p>
		</form>`
}


module.exports = {
	'GET /':login
}