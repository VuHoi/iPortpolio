var mongoose = require('mongoose');

module.exports = mongoose.model('portfolio', {
    userId: String,
    name: String,
    slug: String,
    profile: String,
    address: String,
    email: String,
    otherLink: String,
    phone: String,
    department: String,
    education: [
        {
            position: String,
            name: String,
            duration: String
        } 
    ],
    skills: [{
        title: String,
        process: Number
    }],
    expertise: [
        { title: String }
     ],
    experiences: [
        {
            discription: String,
            position: [
                { title: String }
            ],
            address: String,
            name: String,
            duration: String,
        }
    ],
    projects: [
        {
            name: String,
            param1: String,
            param2: String,
            icons: [String]
        }
    ]
});