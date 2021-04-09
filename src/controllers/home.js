// const Config = require('../database/models/Config')

class Home {
    index(req, res) {
        res.render('home/home')
    }
    competitions(req, res) {
        res.render('competitions/competitions')
    }
}


module.exports = new Home
