var home=require('../controls/app/index.js');
var detail=require('../controls/app/detail.js');
var register=require('../controls/app/register.js');
var login=require('../controls/app/login.js');
var loginout=require('../controls/app/loginout.js');

module.exports=function (router) {
	router.get('/',home.home);
	router.get('/article/:id',detail.detail);

	//注册
	router.get('/register',register.home);
	router.post('/handleRegister',register.handleRegister);

	//登录
	router.get('/login',login.home);
	router.post('/handleLogin',login.handleLogin);


	router.get('/loginOut',loginout);
}