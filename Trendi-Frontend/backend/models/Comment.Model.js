const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var  CommentSchema = new Schema({
    username : {type:String, required:true},
    trend : {type:String, required:true},
    commentary: {type:String, required:true}
});

module.exports = mongoose.model('Comments',CommentSchema);


