const express = require("express");

const app = express()

const morgan = require("morgan")

const rateLimit = require("express-rate-limit")


const helmet = require("helmet")

const mongosanitize = require("express-mongo-sanitize")


const bodyParser = require("body-parser")

const xss = require("xss")

const cors = require("cors")


app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}))





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
// Custom XSS Sanitization Middleware
const sanitizeXSS = (data) => {
    if (typeof data === "string") {
        return xss(data);
    }
    if (typeof data === "object" && data !== null) {
        for (const key in data) {
            data[key] = sanitizeXSS(data[key]);
        }
    }
    return data;
};

app.use((req, res, next) => {
    if (req.body) req.body = sanitizeXSS(req.body);
    if (req.query) req.query = sanitizeXSS(req.query);
    if (req.params) req.params = sanitizeXSS(req.params);
    next();
});

app.use(mongosanitize())



module.exports = app;