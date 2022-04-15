const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())

// Example json data
const data = require('./data.json')

// Routes

app.get('/api', (req, res) => {
    res.json(data)
})

// Basic Config
const port = process.env.PORT || 3000

//Run App
const start = () => {
    try {
        app.listen(port, () => 
        console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()