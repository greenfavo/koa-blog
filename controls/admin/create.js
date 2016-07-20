module.exports={
	show:function *(next) {
		yield this.render('admin/create.html');
	},
	handleCreate:function *() {
		
	}
}