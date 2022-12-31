const mongoose = require('mongoose')

// Connect to the database
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected!')
}).catch((error) => {
    console.log('Unable to connect to DB: ', error)
})

