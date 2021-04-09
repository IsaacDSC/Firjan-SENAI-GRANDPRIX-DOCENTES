const app = require('./app/app')


const port = 3000

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
    console.log('Break Server CTRL + C')
})