var models=require('../../models/models.js');
module.exports={
	home:function *(next) {
		try {
			var posts=yield models.Article.find({});
			yield this.render('app/index.html',{
				posts:posts
			});
		} catch(e) {
			// statements
			console.log(e);
		}
	}
}