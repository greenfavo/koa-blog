var models=require('../../models/models.js');
var crypto=require('crypto');

module.exports={
	home:function *(next) {
		yield this.render('app/login.html',{title:'登录'});
	},
	handleLogin:function *(next) {
		var username=this.request.body.username;
		var password=this.request.body.password;

		var md5=crypto.createHash('md5');

		try {
			var user=yield models.User.findOne({username:username});

			//密码加密
			password=md5.update(password+user.salt,'utf8').digest('base64');

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