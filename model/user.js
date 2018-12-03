
var mongoose = require('mongoose');

var bcrypt = require('bcrypt');
const saltRounds = 10;

const schema = mongoose.Schema;


var userSchema = new schema({
    username: String,
    password: String,
    avatar:String,
    role:{type: String, required: true, default:'user'},
});

userSchema.statics.authenticate = function (username, password, callback) {
    User.findOne({ username: username })
        .exec(function (err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    var err = new Error('Invalid password.');
                    err.status = 400;
                    return callback(err);
                }
            })
            
        });
}


var User = mongoose.model('User', userSchema);
module.exports= User;