var models=require('../../models/models.js');
module.exports={
	home:function *(next) {
		yield this.render('app/login.html',{title:'登录'});
	},
	handleLogin:function *(next) {
		var username=this.request.body.username;
		var password=this.request.body.password;
		try {
			var result=yield models.User.find({username:username,password:password});
			if (result.length) {
				this.session.username=username;
				this.redirect('/');
			}else{
				this.body='用户名或密码错误';
			}
		} catch(e) {
			this.body='登录失败';
			console.log(e);
		}
	}
}