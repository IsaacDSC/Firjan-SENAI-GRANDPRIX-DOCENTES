// const Config = require('../database/models/Config')
require('dotenv').config()
const { DATA } = require('../../data/user')
const { transporter } = require('../helpers/email')
const db = require('../database/conn/sql')
const schedule = require('../database/models/schedule')

class Home {
    index(req, res) {
        const users = DATA.username
        res.render('home/home', { users })
    }

    competitions(req, res) {
        const users = DATA.username
        res.render('competitions/competitions', { users })
    }

    tutors(req, res) {
        const users = DATA.username
        res.render('tutors/tutors', { users })
    }

    schedule(req, res) {
        let sql = `SELECT docente FROM admins;`
        const { date, hr, subject } = req.body
        let user = DATA.username
        db.query(sql, (err, result) => {
            schedule.create({
                user: user,
                data: date,
                hr: hr,
                assunto: subject
            }).then(() => {
                res.redirect('/')
            }).catch((err) => {
                res.redirect('/')
            })
        })
    }

}


module.exports = new Home
 // const info = await = transporter.sendMail({
                //     from: `<${process.env.USER_EMAIL}>`,
                //     to: result[0].docente,
                //     subject: 'TUTORIA',
                //     html: `
                //     <h1>MENSAGEM DE ${user}</h1>
                //     <hr>
                //     <p>${date} ${hr}</p>
                //     <p>${subject}</p>
                //     `
                // })