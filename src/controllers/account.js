// const passport = require('passport')
// const admin = require('../database/models/Admin')

// class Account {
//     login(req, res) {
//         res.render('account/login', { layout: 'account.hbs' })
//     }
//     checkLogin(req, res, next) {
//         passport.authenticate('local', {
//             successRedirect: '/',
//             failureRedirect: '/account/login',
//             failureFlash: true
//         })(req, res, next)
//     }
//     register(req, res) {
//         res.render('account/register', { layout: 'account.hbs' })
//     }
//     registerUser(req, res) {
//         const { name, username, email, telehpone, password, passportCompare } = req.body
//         if (password == passportCompare) {
//             const pass = password
//             admin.create({
//                 name: name,
//                 username: username,
//                 email: email,
//                 telephone: telehpone,
//                 password: pass,
//                 superuser: false
//             })
//                 .then(() => {
//                     req.flash('success_msg', 'Seja bem vindo!')
//                     res.redirect('/')
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                     req.flash('error_msg', 'Preencha os campos corretamente e tente novamente!')
//                     res.redirect('/')
//                 })
//         }
//         if (password != passportCompare) {
//             req.flash('error_msg', 'As senhas não conferem, tente novamente!')
//             res.redirect('/')
//         }
//     }
//     logout(req, res) {
//         req.logout()
//         req.flash('success_msg', 'Deslogado com sucesso!')
//         res.redirect('/account/login')
//     }

// }


// module.exports = new Account
