

var mongoose = require('mongoose');
var portfolio = require('../model/portfolio');
module.exports = function (app) {
    // http get
    app.get('/api/information', (req, res) => {
        portfolio.find({}).then(item => {
            return res.json(item)
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
}