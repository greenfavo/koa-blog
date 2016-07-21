module.exports=function *(next) {
	this.session.username=null;
	this.status=303;
	this.redirect('/');
}