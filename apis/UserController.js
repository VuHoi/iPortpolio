var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var db = require('../middlewares/db');
var user = require('../model/user');
const express = require('express');
module.exports = function (app) {
    // http get
    app.get('/api/user', (req, res) => {

        user.find({}).then(item => {
            item.forEach(element => {
                element.password = "*"
            });
            res.json(item);
        })

    });

    app.get('/api/user/:id', (req, res) => {
        var id = mongoose.Types.ObjectId(req.params.id);
        user.findOne({ _id: id }).then(item => {
            res.json(item);
        })
    });

    app.get('/user/exiting/:username', (req, res) => {
        user.findOne({ username: req.params.username }).then(item => {
          if(item) res.json({status:true});
         else res.json({status:false})
        });
    });

    //http post
    app.post('/user', (req, res) => {
        var User = req.body;
        bcrypt.hash(User.password, saltRounds, function (err, hash) {
            User.password = hash;
        });
        setTimeout(() => {
            user.create(User).then(() => {
                res.json(User.username);
                if (error) {
                    return json(error);
                } else {
                    res.json("Ok");
                }
            })
                .catch((err) => {
                    res.json(err)
                })
        }, 500)
    })



    //get  info of user by id 
    app.put('/api/user/:id', (req, res) => {
        var id = mongoose.Types.ObjectId(req.params.id);
        user.findOneAndUpdate({ _id: id }, req.body, { new: true }, function (err, product) {
            if (err)
                res.json(err);
            res.json(user);
        });

    })
    // delete user by id 
    app.delete('/api/user/:id', (req, res) => {
        var id = mongoose.Types.ObjectId(req.params.id);
        user.remove({ _id: id }, (err, result) => {
            if (err)
                res.json(err);
            res.json({ _id: id });
        })
    })



    // login
    app.post('/login', (req, res) => {
        var User = req.body;
        user.authenticate(User.username, User.password, function (error, user) {
            if (error || !user) {
                var err = {
                    message: 'Wrong username or password.',
                    success: false
                };

                res.json(err);
            } else {
                const payload = {
                    id: user._id,
                    username: user.username,
                    role: user.role
                };
                var token = jwt.sign(payload, app.get('superSecret'), {
                    expiresIn: "2 days"
                });
                res.json({
                    success: true,
                    token: token,
                    username: user.username
                });
                //https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens =====> document to token 
            }
        });
    })
    //get user by token
    app.get('/user/token', (req, res) => {
        var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];

        var id = jwt.verify(token, db.secret, function (err, user) {

            return user.id;
        })

        user.findOne({ _id: id }).then(item => {
            res.json({
                username: item.username,
                id: item._id,
                role: item.role
            });
        })
    })

    // get avater of user by name 
    app.get('/user/avatar/:username', (req, res) => {

        user.findOne({ username: req.params.username }).then(item => {
            res.json(item.avatar);
        })
    })
    // GET for logout logout
    app.get('/logout', function (req, res, next) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
                if (err) {
                    return next(err);
                } else {
                    res.json("Successful");
                }
            });
        }
    });


    // upload image and save image  base 64 on mongose db
    app.put('/upload/image/:id', (req, res, next) => {
        var id = mongoose.Types.ObjectId(req.params.id);
        var body = req.body;
        const image2base64 = require('image-to-base64');
        image2base64(body.path) // you can also to use url
            .then(
                (response) => {
                    user.findOneAndUpdate({ _id: id }, { avatar: response }, { new: true }, function (err, product) {
                        if (err) res.json(err)
                        res.json(product)
                    });
                }
            )
            .catch(
                (error) => {
                    res.json(error)
                }
            )
    })



    // upload image and save image  base 64 on mongose db
    app.put('/api/upload/imageV2/:id', (req, res, next) => {
        var id = mongoose.Types.ObjectId(req.params.id);
        var body = req.body;
        user.findOneAndUpdate({ _id: id }, { avatar: body.avatar }, function (err, user) {
            if (err) res.json(err)
            res.json({
                username:user.username
            })
        })
           
    })

}