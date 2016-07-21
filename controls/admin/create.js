var models=require('../../models/models.js');

module.exports={
	show:function *(next) {
		yield this.render('admin/create.html');
	},
	handleCreate:function *(next) {
		var doc={
			title:this.request.body.title,
			content:this.request.body.content,
			author:'nancy',
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