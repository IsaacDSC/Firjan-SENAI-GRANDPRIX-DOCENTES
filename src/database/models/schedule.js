const db = require('../conn/sequelize')

const Schedule = db.define('schedule', {
    user: {
        type: db.Sequelize.STRING,
    },
    data: {
        type: db.Sequelize.STRING,
    },
    hr: {
        type: db.Sequelize.STRING,
    },
    assunto: {
        type: db.Sequelize.TEXT,
    },
})

//Schedule.sync({ force: true })

module.exports = Schedule