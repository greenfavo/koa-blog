var create=require('../controls/admin/create.js');
module.exports=function (router) {
	router.get('/admin',function *(next) {
		this.body='admin';
	});

	router.get('/admin/create',create.show);
}