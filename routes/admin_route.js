var create=require('../controls/admin/create.js');
var admin=require('../controls/admin/admin.js');

module.exports=function (router) {
	router.get('/admin',admin.home);

	router.get('/admin/delete',admin.delete);

	router.get('/admin/create',create.show);

	router.post('/admin/handleCreate',create.handleCreate);
}