const express = require('express')
const router = express.Router()

// const { auth } = require('../middlewares/auth')

const home = require('../controllers/home')


router.get('/', home.index)
router.get('/competition', home.competitions)




module.exports = router
