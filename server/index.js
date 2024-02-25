const express = require('express')
const cors = require('cors')
const router = require('./router')
const cookierParser = require('cookie-parser')
const dotenv = require('dotenv')
const passport = require('passport')
require('./config/passport.config')

const app = express()

dotenv.config()


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(passport.initialize());
app.use(cookierParser());
app.use(express.json())
app.use(router)


app.listen(3001, () => {
  console.log("server active")
})