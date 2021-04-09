const DATA = {
    username: '',
    logo: ''
}

const dataUser = (username, logo) => {
    DATA.username = username
    DATA.logo = logo
}

const reset = () => {
    DATA.username = 0
}



module.exports = { dataUser, DATA, reset }