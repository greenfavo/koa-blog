var mongoose = require('mongoose');
// 模型的构建

// 创建模式
// 用户模式
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    salt:String,//md5 salt
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
var User = mongoose.model('User', userSchema);
var Article = mongoose.model('Article', articleSchema);

// 导出模型
exports.User = User;
exports.Article = Article;