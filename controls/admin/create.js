var models=require('../../models/models.js');

module.exports={
	show:function *(next) {
		yield this.render('admin/create.html');
	},
	handleCreate:function *(next) {
		var doc={
			title:this.request.body.title,
			content:this.request.body.content,
			author:'nacy',
			time:new Date()
		};
		yield models.Article.create(doc);
		this.status=303;
		this.redirect('/admin/create');

	}
}