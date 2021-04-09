const db = require('../conn/sequelize')

const Team = db.define('teams', {
    nameTeam:{
        type: db.Sequelize.STRING,
    },
    turmaOne:{
        type: db.Sequelize.STRING,
    } ,
    turmaTow:{
        type: db.Sequelize.STRING,
    },
    turmaThree:{
        type: db.Sequelize.STRING,
    },
    modaly_one: {
        type: db.Sequelize.STRING,
    },
    modaly_tow: {
        type: db.Sequelize.STRING,
    },
    modaly_three: {
        type: db.Sequelize.STRING,
    },
    studentsOne: {
        type: db.Sequelize.STRING,
    },
    studentsTow: {
        type: db.Sequelize.STRING,
    },
    studentsThree: {
        type: db.Sequelize.STRING,
    },
    studentsFor: {
        type: db.Sequelize.STRING,
    },
    studentsFive: {
        type: db.Sequelize.STRING,
    },

})

//Team.sync({ force: true })

module.exports = Team