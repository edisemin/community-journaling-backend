const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false})) // This middleware is needed to get access to the data from the frontend html input field values 








module.exports = app
