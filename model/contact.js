var mongoose = require('mongoose');

module.exports= mongoose.model('contact',{
   name:String,
   email:String,
   subject:String,
   message:String,
   toUserName:String
   });