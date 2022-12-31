const mongoose = require('mongoose')

const connectionURL = process.env.MONGODB_URL
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected!')
}).catch((error) => {
    console.log('Unable to connect to DB: ', error)
})