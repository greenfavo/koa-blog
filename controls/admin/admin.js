var models=require('../../models/models.js');

module.exports={
	home:function *(next) {
		try {
			var posts= yield models.Article.find({});
			yield this.render('admin/admin.html',{
				posts:posts
			});
		} catch(e) {
			this.body='发生错误';
			console.error(e);
		}
		
	},
	delete:function *(next) {
		var id=this.query.id;
		try {
			yield models.Article.remove({_id:id});
			this.status=303;
			this.redirect('/admin');
		} catch(e) {
			this.body='删除失败';
			console.log(e);
		}
	},
	edit:function *(next) {
		 /* body... */ 
	},
	search:function *(next) {
		 /* body... */ 
	}
}