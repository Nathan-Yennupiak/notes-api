const express = require('express')
const app = express()
let router = require('./controller/noteController')

app.use(express.json())
app.use(router)

const port = process.env.PORT 

app.listen (port, () => {
    console.log(`Server is up on port ${port}`)
})