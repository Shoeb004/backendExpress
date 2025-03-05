const mongoose = require('mongoose')

const dB = async ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`Connected to Db: ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(err)
        process.exit(1)
    })
}

module.exports = dB