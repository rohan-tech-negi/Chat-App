const app = require("./app");
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"})

process.on("uncaughtException", (err)=>{
  console.log(err);
  process.exit(1)
})




const http = require("http");

const server = http.createServer(app);


const DB = process.env.DBURI.replace("<PASSWORD>", process.env.DBPASSWORD);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});


process.on("unhandledRejection",(err)=>{
  console.log(err)
  server.close(()=>{
    process.exit(1)
  })
})