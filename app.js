require("dotenv").config();

const express = require("express");
const connectDb = require('./config/db.js')
const cors = require('cors')
const userRoutes = require('./routes/userRoute.js')

const app = express();

// Exprees MiddleWare
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// Init connection database
connectDb()

app.use("/", userRoutes);
module.exports = app;
