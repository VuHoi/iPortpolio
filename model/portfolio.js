var mongoose = require('mongoose');

module.exports= mongoose.model('portfolio',{
    name:String,
    university : {
        param1:String,
        param2:String
    },
    hometown : {
        param1:String,
        param2:String
    },
    Hobbies : {
        param1:String,
        param2:String
    },
    profile : String,
    address : String,
    email : String,
    otherLink : String,
    phone : String,
    whoIam : {
        param1:String,
        param2:String,
        param3:String
    },
    skill_summary : {
        param1:String,
        param2:String,
        param3:String
    },
    education : [
        {
            position:String,
            name:String,
            duration:String
        }
    ],
    skills : {
        title:String,
        process:Number
    },
    expertise : [String],
    experiences : [
        {
            discription : String,
            position :[String],
            address:String,
            name:String,
            duration:String
        }
    ],


   });