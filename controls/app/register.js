var models=require('../../models/models.js');
var crypto=require('crypto');

module.exports={
	home:function *(next) {
		yield this.render('app/register.html',{title:'注册'});
	},
	handleRegister:function *(next) {
		try {
			var user={
				username:this.request.body.username,
				password:this.request.body.password,
			};
			var md5=crypto.createHash('md5');
			user.salt=new Date()+user.username;//md5 salt
			user.password=md5.update(user.password+user.salt,'utf8').digest('base64');//md5加盐加密

			var result=yield models.User.find({username:user.username});
			if (result.length==0) {
				yield models.User.create(user);
				this.session.username=user.username;
				this.status=303;
				this.redirect('/');
			}else{
				this.body='此用户名已被占用';
			}
		} catch(e) {
			this.body='注册失败';
			console.log(e);
		}
	}
}