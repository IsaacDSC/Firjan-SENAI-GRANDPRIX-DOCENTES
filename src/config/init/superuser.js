const bcrypt = require('bcrypt')
const Admin = require('../../database/models/Admin')


function createSuperUser() {
    const pwd = 'secret'
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(pwd, salt, (err, hash) => {
            if (err) {
                res.send('Erro ao criptogradar esta senha: ' + err)
            } else {
                const pass = hash
                Admin.create({
                    username: 'admin',
                    password: pass,
                    superuser: true
                }).then(() => {
                    console.log(' CREATED SUPERUSER')
                }).catch((err) => {
                    console.log(err)
                })
            }
        })
    })


}

exports.createSuperUser = createSuperUser