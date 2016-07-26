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

			//如果输入的密码和数据库中存储的密码一致，则登录成功
			if (password===user.password) {
				this.session.username=username;
				this.redirect('/');
			}else{
				this.body='密码错误';
			}
		} catch(e) {
			this.body='登录失败，用户不存在';
			console.log(e);
		}
	}
}