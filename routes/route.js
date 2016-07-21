var home=require('../controls/app/index.js');
var detail=require('../controls/app/detail.js');

module.exports=function (router) {
	router.get('/',home.home);
	router.get('/article/:id',detail.detail);
}