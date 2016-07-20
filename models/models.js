var mongoose = require('mongoose');
var app=require('koa')();
// 模型的构建

// 创建模式
// 用户模式
var userSchema = mongoose.Schema({
    userName: String,
    password: String,
});
// 文章模式
var articleSchema = mongoose.Schema({
    title: String,
    author: String,
    content: String,
    time: String,
    views:{//浏览量
        type:Number,
        default:0
    },
   
});

// 绑定模型
// 用户模型
var User = mongoose.model('User', userSchema);
var Article = mongoose.model('Article', articleSchema);

// 初始化
// User.find(function(err, users){
//     if(users.length)
//         return;
//     var newUser=new User({
//         userName: 'root',
//         password: 'root',
//     });

//     yield newUser.save();
// });
app.use(function *(next) {
    var newUser=new User({
        userName: 'root',
        password: 'root',
    }); 
    yield newUser.save();
    try {
        this.data=yield User.find({userName:'root'});
        console.log(this.data);
    } catch(e) {
        // statements
        console.log(e);
    }
})

// 导出模型
exports.User = User;
exports.Article = Article;