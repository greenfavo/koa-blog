var app=require('koa')();
var swig=require('koa-swig');
var router=require('koa-router')();
var static=require('koa-static');

var path=require('path');

var route=require('./routes/route.js');
var admin_route=require('./routes/admin_route.js');


app.context.render=swig({
	root:path.join(__dirname,'views'),
	autoescape:true,
	cache:'memory',
	ext:'html',
});

// 静态文件服务中间件
app.use(static(__dirname+'/public'));

// 路由
route(router);
admin_route(router);
app.use(router.routes());

//错误处理
app.use(function *(next) {
	this.status=404;
	this.body='404 Not Found!';
});

app.on('error',function (err,ctx) {
	// log.error('server error',err,ctx);
	if (process.env.NODE_ENV!='production') {
		this.body='500 server error';
		console.error(err.message);
		console.error(err);
	}
});

app.use(function *() {
	throw new Error('server error');
});

// app.use(function *(next) {
// 	yield this.render('admin/index.html'); 
// });
app.listen(3000);
console.log('app listens on 3000 port');