const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const session = require('express-session')
const flash = require('express-flash')
const cors = require('cors')
const path = require('path')
const router = require('../routes/routes')
const config = require('../config/config')
const passport = require('passport')
require('../middlewares/checkAdmin')(passport)
const { CONFIG, initTables } = require('../config/config')
const { createSuperUser } = require('../config/init/superuser')


class App {
    constructor() {
        this.express = express()
        this.middlewares()
        this.session()
        this.flash()
        this.passport()
        this.routes()
        this.engine()
        this.config()
    }
    middlewares() {
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
        this.express.use(cors())
        this.express.use(express.static(path.join(__dirname, '../', 'public')))
    }

    session() {
        this.express.use(session({
            secret: process.env.SECRETKEY_SESSION || 'somesecrettoken',
            resave: true,
            saveUninitialized: true
        }))
    }

    flash() {
        this.express.use(flash())
        this.express.use((req, res, next) => {
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            res.locals.message = req.flash('message')
            res.locals.error = req.flash('error')
            next()
        })
    }

    passport() {
        this.express.use(passport.initialize())
        this.express.use(passport.session())
    }

    routes() {
        this.express.use(router)
    }

    config() {
        if (CONFIG.initTables) initTables()
        if (CONFIG.createSuperuser) createSuperUser()
    }

    engine() {
        this.express.engine('hbs', hbs({
            defaultLayout: 'main.hbs',
            extname: 'hbs',
            helpers: {

                trataTelephone: function (value) {
                    if (!value) { return }
                    return value.split('@')[0]
                },
                somaUm: function (value) {
                    return value + 1
                },
                maiuscula: function (value) {
                    return value.toUpperCase()
                },
                dinheiro: function (value) {
                    if (value) {
                        return Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    }
                    return
                },
                valorTrue: function (value) {
                    return value == 'true'
                },
                somaDinheiro: function (value1, value2) {
                    if (value1) {
                        return (value1 + value2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    }
                    return
                },
                multiplica: function (value1, value2) {
                    if (value1) {
                        return (value1 * value2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    }
                    return
                },
                trataHora: function (value) {
                    const formataHora = (Hora) => Hora < 10 ? '0' + Hora : Hora
                    let data = new Date(value)
                    return `${formataHora(data.getHours())}:${formataHora(data.getMinutes())}`
                },
                trataData: function (value) {
                    const formataHora = (Hora) => Hora < 10 ? '0' + Hora : Hora
                    let data = new Date(value)
                    let dia = data.getDate()
                    let mes = data.getMonth()
                    let ano = data.getFullYear()
                    return `${formataHora(dia)}/${formataHora(mes + 1)}/${ano}`
                },
                meseAno: function () {
                    let data = new Date()
                    const mes = [
                        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
                        "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
                    ]

                    return `${mes[data.getMonth()]} ${data.getFullYear()}`
                },
                somaPedidos: function (value, value2) {
                    soma = 0
                    value.forEach(e => {
                        soma += Number(e.value) * Number(e.quantity)
                    });
                    if (Number(value2)) {
                        return (soma + value2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    }
                    return (soma).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                }
            }
        }));
        this.express.set('view engine', 'hbs');
        this.express.set("views", path.join(__dirname, '../', "/views/"))
    }


}



module.exports = new App().express
