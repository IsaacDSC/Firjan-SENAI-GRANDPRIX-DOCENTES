const passport = require('passport')
const admin = require('../database/models/Admin')
const bcrypt = require('bcrypt')
const { reset } = require('../../data/user')

class Account {
    login(req, res) {
        res.render('account/login', { layout: 'account.hbs' })
    }

    checkLogin(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/admin',
            failureFlash: true
        })(req, res, next)
    }

    register(req, res) {
        res.render('account/register', { layout: 'account.hbs' })
    }

    registerUser(req, res) {
        const { docente, username, password } = req.body
        const pwd = password
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(pwd, salt, (err, hash) => {
                if (err) {
                    res.send('Erro ao criptogradar esta senha: ' + err)
                } else {
                    const pass = hash
                    admin.create({
                        docente: docente,
                        username: username,
                        password: pass,
                        teacher: false,
                        superuser: false
                    }).then(() => {
                       req.flash('success_msg', 'Usuário cadastrado com sucesso!')
                       res.redirect('/')
                    }).catch((err) => {
                        console.log(err)
                    })
                }
            })
        })
    }

    logout(req, res) {
        reset()
        req.logout()
        req.flash('success_msg', 'Deslogado com sucesso!')
        res.redirect('/admin')
    }

}


module.exports = new Account
