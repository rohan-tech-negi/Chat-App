require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

process.on("uncaughtException", (err)=>{
  console.log(err);
  process.exit(1);
});




const http = require("http");

const server = http.createServer(app);


const DB = process.env.DBURI;
// console.log(process.env.DBURI);

mongoose.connect(DB,{
}).then((con)=>{
  console.log("DB connection successful")
}).catch((err)=>{
  console.log(err)
})

const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
  res.send('This is the About Page.');
});
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});




process.on("unhandledRejection",(err)=>{
  console.log(err)
  server.close(()=>{
    process.exit(1)
  })
})