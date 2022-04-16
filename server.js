const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())

// Json data
const activeFilters = require('./data/activeFilters.json')
const searchFilters = require('./data/searchFilters-en-GB.json')
const filtersTextEn = require('./data/searchFilters-text-en-GB.json')
const filtersTextJa = require('./data/searchFilters-text-ja-JP.json')

// Routes

app.get('/api/active-filters', (req, res) => {
    res.json(activeFilters)
})

app.get('/api/search-filters', (req, res) => {
    res.json(searchFilters)
})

app.get('/api/filters-text-en', (req, res) => {
    res.json(filtersTextEn)
})

app.get('/api/filters-text-ja', (req, res) => {
    res.json(filtersTextJa)
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