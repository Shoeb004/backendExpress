const app = require('./app.js')

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`Server listening on port https://localhost:${PORT}`)
})