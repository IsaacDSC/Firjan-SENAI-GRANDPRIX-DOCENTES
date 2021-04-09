const Sequelize = require('sequelize')
const { GENERAL } = require('../../config/config')



const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    define: {
        timestamps: true
    }
})


module.exports = connection