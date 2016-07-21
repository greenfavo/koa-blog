var models=require('../../models/models.js');
module.exports={
	home:function *(next) {
		try {
			var posts=yield models.Article.find({});
			var hotPosts=yield models.Article.find({}).limit(5).sort({views:-1});
			yield this.render('app/index.html',{
				title:'首页',
				posts:posts,
				hotPosts:hotPosts
			});
		} catch(e) {
			this.body='加载错误';
			console.log(e);
		}
	}
}