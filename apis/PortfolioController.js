

var mongoose = require('mongoose');
var portfolio = require('../model/portfolio');
module.exports = function (app) {
    // http get
    app.get('/api/information', (req, res) => {
        portfolio.find({}).then(item => {
            return res.json(item)
        })
    });

     // http get by id
     app.get('/api/information/:id', (req, res) => {
        var id = mongoose.Types.ObjectId(req.params.id);
      
        portfolio.findOne({_id: id}).then(item=>{
            res.json(item);
        })

    });

    // http  post 
    app.post('/api/information', (req, res) => {
        var Portfolio = req.body;
        portfolio.create(Portfolio).then(() => {
            console.log(Portfolio)
            res.json(Portfolio)
        })
        .catch((err) => {
            res.json(err)
        })
    });
//  put information  by id  of portfolio
    app.put('/api/information/:id',(req,res)=>{
        var id = mongoose.Types.ObjectId(req.params.id);
     console.log(req.body);
     portfolio.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, portfolio) {
            if (err)
                res.json(err);
            res.json(portfolio);
        });

    })

// delete  a portfolio
app.delete('/api/information/:id',(req,res)=>{
    var id = mongoose.Types.ObjectId(req.params.id);
    portfolio.remove({_id:id},(err,result)=>{
        if (err)
            res.json(err);
        res.json({_id:id});
    });
});



}