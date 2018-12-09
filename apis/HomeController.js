

var mongoose = require('mongoose');
var home = require('../model/home');
module.exports = function (app) {
    // http get
    app.get('/api/home', (req, res) => {
        home.find({}).then(item => {
            return res.json(item)
        })
    });

     // http get by id
     app.get('/api/home/:id', (req, res) => {
        var id = mongoose.Types.ObjectId(req.params.id);
        home.findOne({_id: id}).then(item=>{
            res.json(item);
        })
    });

    // http  post 
    app.post('/api/home', (req, res) => {
        var Home = req.body;
        home.create(Home).then(() => {
            res.json(Home)
        })
        .catch((err) => {
            res.json(err)
        })
    });
//  put home  by id  of home
    app.put('/api/home/:id',(req,res)=>{
        var id = mongoose.Types.ObjectId(req.params.id);
     console.log(req.body);
     home.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, home) {
            if (err)
                res.json(err);
            res.json(home);
        });

    })

// delete  a home
app.delete('/api/home/:id',(req,res)=>{
    var id = mongoose.Types.ObjectId(req.params.id);
    home.remove({_id:id},(err,result)=>{
        if (err)
            res.json(err);
        res.json({_id:id});
    });
});



}