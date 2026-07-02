const express = require("express");

const app = express()

const morgan = require("morgan")

const rateLimit = require("express-rate-limit")


const helmet = require("helmet")

const mongosanitize = require("express-mongo-sanitize")


const bodyParser = require("body-parser")

const xss = require("xss")






app.use(express.json({limit: "10kb"}))

app.use(express.urlencoded({extended:true,limit:"10kb"}))

app.use(bodyParser.json())

app.use(helmet())

if(process.env.NODE_ENV === "development"){

    app.use(morgan("dev"))

}

const limiter = rateLimit({
    max:3000,
    windowMs:60*60*1000,
    message:"Too many requests from this IP, please try again in an hour"
})

app.use("/api",limiter)
app.use(xss())
app.use(mongosanitize())



module.exports = app;