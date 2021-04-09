// const Config = require('../database/models/Config')
require('dotenv').config()
const { DATA } = require('../../data/user')
const { transporter } = require('../helpers/email')
const db = require('../database/conn/sql')
const schedule = require('../database/models/schedule')
const Team = require('../database/models/Team')

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

    demand(req, res) {
        console.log(req.body)
        const { turma1, modalidade1, turma2, modalidade2, turma3, modalidade3, team, user01, user02, user03, user04, user05 } = req.body
        Team.create({
            nameTeam: team,
            turmaOne: turma1,
            turmaTow: turma2,
            turmaThree: turma3,
            modaly_one: modalidade1,
            modaly_tow: modalidade2,
            modaly_three: modalidade3,
            studentsOne: user01,
            studentsTow: user02,
            studentsThree: user03,
            studentsFor: user04,
            studentsFive: user05
        }).then(() => {
            req.flash('success_msg', 'Demanda cadastrada com sucesso!')
            res.redirect('/tutors')
        }).catch((err) => {
            console.log(err)
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