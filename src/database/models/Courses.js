const db = require('../conn/sequelize')

const Courses = db.define('courses', {
    name: {
        type: db.Sequelize.STRING,
        require: true,
        allowNull: false,
    },
    username: {
        type: db.Sequelize.STRING,
        require: true,
        allowNull: false,
        unique: true
    },
    password: {
        type: db.Sequelize.STRING,
        require: true,
        allowNull: false
    },
    superuser: {
        type: db.Sequelize.BOOLEAN,
        defaultValue: false,
    },

})

//Courses.sync({ force: true })

module.exports = Courses