const express = require('express')
const router = express.Router()

const { auth } = require('../middlewares/auth')

const home = require('../controllers/home')
const account = require('../controllers/account')
const {DATA} = require('../../data/user')
console.log(DATA)

//ACCOUNTS
router.get('/admin', account.login)
router.post('/account/login', account.checkLogin)
router.get('/account/logout', account.logout)
router.get('/account/register', account.register)
router.post('/account/register', account.registerUser)

//INITIALIZE
router.get('/', home.index)
router.get('/competition', auth, home.competitions)
router.get('/tutors', auth, home.tutors)
router.post('/schedule', auth, home.schedule)
router.post('/demand',  home.demand)




module.exports = router
