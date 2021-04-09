const CONFIG = {
    initTables: false,
    relationship: false,
    createSuperuser: false
}

const Admin = require('../database/models/Admin')
const Team = require('../database/models/Team')
const schedule = require('../database/models/schedule')

let TABLES = [Admin, Team, schedule]
function initTables() {
    TABLES.forEach(element => {
        element.sync({ force: true })
    })
}




module.exports = { CONFIG, initTables }