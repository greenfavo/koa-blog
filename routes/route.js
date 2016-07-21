var home=require('../controls/app/index.js');
module.exports=function (router) {
	router.get('/',home.home);
}