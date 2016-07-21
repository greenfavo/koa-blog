var models=require('../../models/models.js');
module.exports={
	//首页
	home:function *(next) {
		try {
			var posts=yield models.Article.find({}).sort({_id:-1});
			var hotPosts=yield models.Article.find({}).limit(5).sort({views:-1});
			if (this.session.username) {
				var username=this.session.username;
			}
			yield this.render('app/index.html',{
				title:'首页',
				username:username,
				posts:posts,
				hotPosts:hotPosts
			});
		} catch(e) {
			this.body='加载错误';
			console.log(e);
		}
	}
}