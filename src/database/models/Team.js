const db = require('../conn/sequelize')

const Team = db.define('teams', {
    username_id:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    modaly_one: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    modaly_tow: {
        type: db.Sequelize.STRING,
    },
    modaly_three: {
        type: db.Sequelize.STRING,
    },
    students: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },

})

//Team.sync({ force: true })

module.exports = Team