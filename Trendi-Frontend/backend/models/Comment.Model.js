const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var  CommentSchema = new Schema({
    author : {type:String, required:true},
    trendy : {type:String, required:true},
    content: {type:String, required:true}
})

module.exports = mongoose.model('Comments',CommentSchema);


