var models=require('../../models/models.js');
module.exports={
	home:function *(next) {
		yield this.render('app/register.html',{title:'注册'});
	},
	handleRegister:function *(next) {
		try {
			var user={
				username:this.request.body.username,
				password:this.request.body.password
			};
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