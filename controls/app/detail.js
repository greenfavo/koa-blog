var models=require('../../models/models.js');
module.exports={
	detail:function *(next) {
		try {
			var id=this.params.id;
			// 浏览量+1
			yield models.Article.update({_id:id},{$inc:{views:1}});
			
			var post=yield models.Article.findById(id);

			yield this.render('app/detail.html',{
				title:post.title,
				post:post,
			});
		} catch(e) {
			this.body='加载文章错误';
			console.log(e);
		}
	}
}