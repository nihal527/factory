console.log('aa')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/register',(req, res) => {
    res.send({
        message: " Kişi Kaydedildi"
    })
})

app.listen(process.env.PORT || 8081)