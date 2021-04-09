const db = require('../conn/sequelize')

const Admin = db.define('admin', {
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

//Admin.sync({ force: true })

module.exports = Admin