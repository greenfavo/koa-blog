var models=require('../../models/models.js');

module.exports={
	show:function *(next) {
		yield this.render('admin/create.html',{
			title:'新建文章',
			username:this.session.username
		});
	},
	handleCreate:function *(next) {
		var doc={
			title:this.request.body.title,
			content:this.request.body.content,
			author:this.session.username,
			time:new Date()
		};
		try {
			yield models.Article.create(doc);
			this.status=303;
			this.redirect('/admin');
		} catch(e) {
			this.body='保存失败';
			console.log(e);
		}
		

	}
}