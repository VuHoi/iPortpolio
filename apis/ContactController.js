

var contact = require('../model/contact');
module.exports = function (app) {
    // http get
    app.get('/api/contact', (req, res) => {
        contact.find({}).then(item => {
            return res.json(item)
        })
    });
    // http  post 
    app.post('/api/contact', (req, res) => {
        var contactForm = req.body;
        contact.create(contactForm).then(() => {
            console.log(contactForm)
            res.json(contactForm)
        })
        .catch((err) => {
            res.json(err)
        })
    });




}