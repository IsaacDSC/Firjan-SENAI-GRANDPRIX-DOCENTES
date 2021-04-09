const db = require('../conn/sequelize')

const Admin = db.define('admin', {
    docente: {
        type: db.Sequelize.STRING,
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
    teacher: {
        type: db.Sequelize.BOOLEAN,
        defaultValue: false,
    },
    superuser:{
        type: db.Sequelize.BOOLEAN,
        defaultValue: false,
    }

})

//Admin.sync({ force: true })

module.exports = Admin