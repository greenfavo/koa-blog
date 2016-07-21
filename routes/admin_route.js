var create=require('../controls/admin/create.js');
var admin=require('../controls/admin/admin.js');

module.exports=function (router) {
	// 权限控制
	router.get(/^\/admin/,function *(next) {
		if (this.session.username) {
			yield next;
		}else{
			this.status=303;
			this.redirect('/login');
		}	
	});

	router.get('/admin',admin.home);

	router.get('/admin/delete',admin.delete);

	router.get('/admin/create',create.show);

	router.post('/admin/handleCreate',create.handleCreate);
}