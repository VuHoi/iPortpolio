

var contact = require('../model/contact');
module.exports = function (app) {
    // http get
    app.get('/api/contact', (req, res) => {
        contact.find({}).then(item => {
            return res.json(item)
        })
    });
    // http  post 
    app.post('/contact/:username', (req, res) => {
        var contactForm = req.body;
        contactForm.toUserName=req.params.username;
        contact.create(contactForm).then(() => {
            res.json(contactForm)
        })
        .catch((err) => {
            res.json(err)
        })
    });




}